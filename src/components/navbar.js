import React from 'react'
import { Link } from 'gatsby'
import navbarStyles from "./navbar.module.sass"

const Navbar = () => {
  // import { useStaticQuery, graphql } from "gatsby"
  // const q = useStaticQuery(
  //   graphql`
  //     query {
  //       allWpPage {
  //         edges {
  //           node {
  //             id
  //             title
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  return (
    <nav className={navbarStyles.container}>
      <div className={navbarStyles.menu}>
        <Link
          className={navbarStyles.item}
          to="/" 
        >
          Blog
        </Link>
        <Link
          className={navbarStyles.item}
          to="/fiction" 
        >
          Fiction
        </Link>
        <Link
          className={navbarStyles.item}
          to="/art" 
        >
          Art
        </Link>
        <Link
          className={navbarStyles.item}
          to="/poetry" 
        >
          Poetry
        </Link>
        <Link
          className={navbarStyles.item}
          to="/games" 
        >
          Games
        </Link>
        <Link
          className={navbarStyles.item}
          to="/about" 
        >
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
