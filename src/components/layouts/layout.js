/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { injectIntl } from "gatsby-plugin-intl"

import { EntypoFacebook, EntypoGithub } from "react-entypo"

import Header from "./header"
import "../../assets/scss/layout.scss"

const Layout = ({ children, intl }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
          <div>
            <ul>
              <li>
                <a
                  href="https://github.com/LouisBertin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EntypoGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/louis.bertin.9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EntypoFacebook style={{ color: "#3b5998" }} />
                </a>
              </li>
              <li>
                <a href="mailto:contact@louisbertin.fr">
                  contact@louisbertin.fr
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
