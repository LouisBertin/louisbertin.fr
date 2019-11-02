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
        background: file(relativePath: { eq: "header1.jpg" }) {
          childImageSharp {
            fixed(width: 1920, height: 1080) {
              src
            }
          }
        }
        arrow: file(relativePath: { eq: "arrow.png" }) {
          childImageSharp {
            fixed(width: 500) {
              src
            }
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          backgroundImage: `url(${data.background.childImageSharp.fixed.src})`,
        }}
      >
        <div className="overlay"></div>
        <nav>
          <div>
            <div className="main-nav">
              <Link to="/">
                <FormattedMessage id="nav-home" />
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
          <div className="bounce">
            <img
              src={data.arrow.childImageSharp.fixed.src}
              width={30}
              alt="arrow"
            />
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
