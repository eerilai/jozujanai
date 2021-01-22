import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {siteTitle} from "../text.js"

const Layout = ({ isHomePage, children }) => {
  // const {
  //   wp: {
  //     generalSettings: { title },
  //   },
  // } = useStaticQuery(graphql`
  //   query LayoutQuery {
  //     wp {
  //       generalSettings {
  //         title
  //         description
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        <h1 className="main-heading">
          <Link to="/">{siteTitle}</Link>
        </h1>
      </header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  )
}

export default Layout
