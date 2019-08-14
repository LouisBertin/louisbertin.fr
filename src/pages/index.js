import React from "react"
import { graphql } from "gatsby"

import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postsList"

const IndexPage = ({ intl, data }) => {

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={data.site.siteMetadata.title}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <h1>
        <FormattedMessage id="hello" />
      </h1>
      <p>
        <FormattedMessage id="welcome" />
      </p>

      <h2>Posts</h2>
      <PostList posts={data.posts}></PostList>
    </Layout>
  )
}

export default injectIntl(IndexPage)

export const pageQuery = graphql`
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
  site: site {
    siteMetadata {
      title
    }
  }
}
`