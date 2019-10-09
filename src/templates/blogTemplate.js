import React from "react"
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import { getDataFromLanguage } from "../utils/helper"

import "highlight.js/styles/monokai-sublime.css"

const Page = ({ currentLanguage, page }) => {
  const data = getDataFromLanguage(currentLanguage, page.versions)

  return (
    <div className="blogTemplate">
      <div className="blog-intro">
        <h2>{data.title}</h2>
        {/* TODO: fix date issue */}
        <p>By Louis Bertin</p>
      </div>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.markdown }}
      />
    </div>
  )
}

export default function Template({ data }) {
  return (
    <Layout>
      <IntlContextConsumer>
        {({ language: currentLanguage }) => (
          <Page
            currentLanguage={currentLanguage}
            page={data.current.fields.page}
          ></Page>
        )}
      </IntlContextConsumer>
    </Layout>
  )
}

export const pageQuery = graphql`
  fragment FileFields on File {
    fields {
      page {
        path
        type
        lang
        versions {
          lang
          date
          title
          markdown
        }
      }
    }
  }
  query($relativePath: String!) {
    current: file(relativePath: { eq: $relativePath }) {
      ...FileFields
    }
  }
`
