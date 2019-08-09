import React from "react"
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-intl"

export default function Template({ data }) {
  return (
    <IntlContextConsumer>
      {({ language: currentLanguage }) => (
        <div>
          {console.log(currentLanguage)}
          {console.log(data.current.fields.page)}
        </div>
      )}
    </IntlContextConsumer>
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
    current: file( relativePath: {  eq: $relativePath } ) {
      ...FileFields
    }
  }
`