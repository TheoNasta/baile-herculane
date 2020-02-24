/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from '../global/reset-css';

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle/>
      { children }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
