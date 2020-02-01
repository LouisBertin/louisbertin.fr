import { Link } from "gatsby-plugin-intl"
import React from "react"
import Language from "./language"
import { FormattedMessage } from "gatsby-plugin-intl"
import { StaticQuery, graphql } from "gatsby"
import emoji from "emoji-dictionary"

class HeaderComponent extends React.Component {
  render() {
    const { tinyNav, data } = this.props

    if (tinyNav) {
      return (
        <header
          className="tinyNav"
          style={{
            backgroundImage: `url(${data.background.childImageSharp.fixed.src})`,
          }}
        >
          <div className="overlay"></div>
          <nav>
            <div>
              <h1 style={{ display: "block" }}>Louis Bertin</h1>
              <small>French Software Engineer</small>
            </div>
            <div className="navigation">
              <div className="main-nav">
                <Link to="/" activeClassName="active">
                  <FormattedMessage id="nav-home" />
                </Link>
                <Link to="/tools" activeClassName="active">
                  Tools
                </Link>
              </div>
              <Language />
            </div>
          </nav>
        </header>
      )
    }

    return (
      <header
        style={{
          backgroundImage: `url(${data.background.childImageSharp.fixed.src})`,
        }}
      >
        <div className="overlay"></div>
        <nav>
          <div className="navigation">
            <div className="main-nav">
              <Link to="/" activeClassName="active">
                <FormattedMessage id="nav-home" />
              </Link>
              <Link to="/tools" activeClassName="active">
                Tools
              </Link>
            </div>
            <Language />
          </div>
        </nav>
        <div className="intro">
          <div>
            <h1>
              <FormattedMessage
                id="header-intro"
                values={{
                  emoji: emoji.getUnicode("smile"),
                }}
              />
            </h1>
            <p>French Software Engineer</p>
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
    )
  }
}

const Header = props => (
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
    render={data => <HeaderComponent {...props} data={data} />}
  />
)

export default Header
