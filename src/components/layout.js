import React from "react"
import { Link } from "gatsby"
import {siteTitle} from "../text.js"
import Navbar from "./navbar.js"
import layoutStyles from "./layout.module.sass"

const Layout = ({ isHomePage, children }) => {
  // import { useStaticQuery, graphql } from "gatsby"
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
    <div className={`global-wrapper ${layoutStyles.wrapper}`} data-is-root-path={isHomePage}>
      <div className={`content-wrapper ${layoutStyles.contentWrapper}`}>
        <header className={`global-header ${layoutStyles.headerWrapper}`}>
          <h1 className={`header ${layoutStyles.header}`}>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </header>

        <Navbar/>

        <main className={`main ${layoutStyles.main}`}>{children}</main>
        <div className={`content-bottom ${layoutStyles.bottom}`}></div>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.twitter.com/eerilai">eerilai</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
