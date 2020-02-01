import React from "react"
import { graphql } from "gatsby"

import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import PostList from "../components/postsList"

import pdf from "../assets/louis_bertin_CV.pdf"

const IndexPage = ({ intl, data }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        keywords={[`gatsby`, `application`, `react`]}
      />

      <div className="about">
        <div>
          <h2>
            <FormattedMessage id="index-about" />
          </h2>
          <p>
            <FormattedMessage id="index-intro" />
          </p>
          <div className="btn-download">
            <a href={pdf}>
              <FormattedMessage id="btn-dl" />
            </a>
          </div>
        </div>
      </div>

      <div className="blog">
        <div>
          <h2>
            <FormattedMessage id="index-posts" />
          </h2>
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
  }
`
