/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { StaticQuery } from "gatsby"

const SEO = ({title, lang, keywords}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          url,
          description,
        }
      }
    }) => {
      const seo = {
        title: title,
        description: description,
        url: `${url}/`,
      }
      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate} defaultTitle={defaultTitle}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        </>
      )
    }}
  />
)

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle,
        description
        titleTemplate,
        url
      }
    }
  }
`

export default SEO
