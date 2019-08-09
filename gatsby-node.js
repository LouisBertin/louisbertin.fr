const fs = require('fs')
const path = require("path")
const grayMatter = require('gray-matter')

const PATH_TO_MD_PAGES = path.resolve('src/markdown')
const { siteMetadata: { defaultLanguage } } = require('./gatsby-config')

const PAGE_TEMPLATE = path.resolve(`src/templates/blogTemplate.js`)

const _getMarkdownNodeIdAndLanguage = node => {
  const relativePath = path.relative(PATH_TO_MD_PAGES, node.absolutePath)
  // e.g. static/code/my-project/en.md => { pageType: static, pageId: code/my-project, lang: en }
  const tok = relativePath.split('/')
  const pageType = tok[0]
  const mdfile = tok[tok.length - 1]
  const pageId = tok.slice(1, tok.length - 1).join('/')
  const lang = path.basename(mdfile, '.md')
  return { pageType, pageId, lang }
}

const _isMarkdownNode = n => n.internal.mediaType === `text/markdown`

const _loadMarkdownFile = n => grayMatter(fs.readFileSync(n.absolutePath, 'utf-8').toString())

const _generatePagePath = ({ pageType, pageId, date }) => {
    return `/${pageId}`
  }

/*
Create internal node representations of each Markdown file
 */
exports.onCreateNode = ({ node, actions, getNodes }) => {
    const { createNodeField } = actions
  

    if (_isMarkdownNode(node)) {
      // pageType = "blog" or "static"
      // pageId = page slug
      // lang = "en" or "zh-TW"
      const { pageType, pageId, lang } = _getMarkdownNodeIdAndLanguage(node)
  
      // these values are extracted from within the markdown
      const { data: { title, date, draft }, content: body } = _loadMarkdownFile(node)
  
      const pageData = {
        pageId,
        type: pageType,
        path: _generatePagePath({ pageType, pageId, date }),
        lang,
        date,
        versions: []
      }
  
      // if is default language node then load in versions in other languages
      if (lang === defaultLanguage) {
        // generate all versions of the node (including default language version)
        getNodes().forEach(n => {
          if (_isMarkdownNode(n)) {
            const r = _getMarkdownNodeIdAndLanguage(n)
  
            if (r.pageId === pageId) {
              const gm = _loadMarkdownFile(n)

              pageData.versions.push({
                lang: r.lang,
                title: gm.data.title,
                date: gm.data.date,
                markdown: gm.content,
              })
            }
          }
        })
      }
  
      // this adds all the data above to Gatsby's internal representation of the node
      createNodeField({
        node,
        name: 'page',
        value: pageData,
      })
    }
  
    return node
  }

  exports.createPages = async ({ actions, graphql, getNode }) => {
    const { createPage, createNodeField } = actions
  
    // fetch the blog posts in reverse chronological order so that we can have
    // them know where they sit in the chain
    const { data: { allFile: { nodes: blogPages } } } = await graphql(`
      {
        allFile( filter: { fields: { page: { type: { eq: "blog" } } } }, sort: { order:DESC, fields: fields___page___date } ) {
          nodes {
            id
            relativePath
          }
        }
      }
    `)
    _createMarkdownPages({ pages: blogPages, getNode, createPage }, index => {
      const newerPageId = 0 < index ? blogPages[index - 1].id : null
      const olderPageId = (blogPages.length - 1) > index ? blogPages[index + 1].id : null
      return { newerPageId, olderPageId }
    })
  }

  const _createMarkdownPages = ({ pages, getNode, createPage }, cb) => {
    pages.forEach(({ id, relativePath }, index) => {
      const node = getNode(id)
      const { fields: { page: { path: pagePath, lang } } } = node
  
      if (defaultLanguage === lang) {
        console.log(pagePath, relativePath)
        createPage({
          path: pagePath,
          component: PAGE_TEMPLATE,
          context: {
            relativePath,
            ...(cb ? cb(index, node) : null)
          },
        })
      }
    })
  }

  