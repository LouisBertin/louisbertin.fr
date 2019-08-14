---
path: /en/get-context-variable-with-gatsby
language: en
title: Get context variable with GastbyJS
date: 2019-08-14T18:12:00
---
Today, I'm working on my personal website developed with GastbyJS (this technology is pretty cool, I'm gonna make an article about it when I'm finished the first version of my website.)
However, i would like to highlight a problem that happens to myself and maybe I can help people in the same situation.
Indeed, this feature is a little bit hidden in GatsbyJS documentation but she is very useful.

I'm using the plugin `gatsby-plugin-intl` to have a multilingual blog and it often happens to me to send language locale to my GraphQL queries. This way, i need to provide to locale into the `context` of every page in order to build my request.

At first, I edit `gatsby-node.js` and I'm adding the lines who have to ability to modify the defaults pages behavior :

```
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  // You can access the variable "locale" in your page queries now

  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  })
}
```
- Then, I can simply get the value of the `locale` variable in my page request :
```
query ($locale: String) {
  posts: allMarkdownRemark(filter: {frontmatter: {language: {eq: $locale}}}) {
    nodes {
      id
      frontmatter {
        title
        language
        date(formatString: "MMMM Do, YYYY", locale: $locale)
        path
      }
    }
  }
}
```
**Problem solved!** You are free to send any variable into your page now