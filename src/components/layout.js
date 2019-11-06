/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from './Globals/Navbar'
import Footer from './Globals/Footer'
import "./layout.css"
import './bootstrap.min.css'
const Layout = ({ children }) => {

  return (
    <>
    <NavBar/>
    {children}
    <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
