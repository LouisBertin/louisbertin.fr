import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import Language from "./language"
import { FormattedMessage } from "gatsby-plugin-intl"

const Header = ({ siteTitle }) => (
  <header>
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
