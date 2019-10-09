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
      {/* <h1>
        <FormattedMessage id="hello" />
      </h1>
      <p>
        <FormattedMessage id="welcome" />
      </p> */}

      <div className="about">
        <div>
          <h2>
            <FormattedMessage id="about" />
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            cupiditate minus illum vitae explicabo quis labore eveniet, fugiat
            ad inventore placeat aperiam aliquid pariatur debitis rem ut?
            Deleniti, perspiciatis reiciendis.
          </p>
        </div>
      </div>

      <div className="blog">
        <div>
          <h2>Posts</h2>
          <PostList posts={data.posts}></PostList>
        </div>
      </div>
    </Layout>
  )
}

export default injectIntl(IndexPage)

export const pageQuery = graphql`
  query($locale: String) {
    posts: allMarkdownRemark(
      filter: { frontmatter: { language: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
