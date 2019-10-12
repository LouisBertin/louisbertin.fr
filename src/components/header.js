import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import Language from "./language"
import { FormattedMessage } from "gatsby-plugin-intl"
import { StaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "header1.jpg" }) {
          childImageSharp {
            fixed(width: 1920, height: 1080) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          backgroundImage: `url(${data.file.childImageSharp.fixed.src})`,
        }}
      >
        <div className="overlay"></div>
        <nav>
          <div>
            <div className="main-nav">
              <Link to="/">
                <FormattedMessage id="home" />
              </Link>
            </div>
            <Language />
          </div>
        </nav>
        <div className="intro">
          <div>
            <h1>{siteTitle}</h1>
            <p>French software engineer</p>
          </div>
        </div>
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
