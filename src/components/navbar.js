import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Navbar = () => {
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
    <nav className="navbar">
      <div className="container">
        <div className="navbar-menu is-lowercase">
          <Link
            className="navbar-item"
            to="/" 
          >
            Blog
          </Link>
          <Link
            className="navbar-item"
            to="/fiction" 
          >
            Fiction
          </Link>
          <Link
            className="navbar-item"
            to="/art" 
          >
            Art
          </Link>
          <Link
            className="navbar-item"
            to="/poetry" 
          >
            Poetry
          </Link>
          <Link
            className="navbar-item"
            to="/games" 
          >
            Games
          </Link>
          <Link
            className="navbar-item"
            to="/about" 
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
