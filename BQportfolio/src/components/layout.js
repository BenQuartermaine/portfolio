import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./Footer"
import styled from 'styled-components'
import { colors } from '../utilities'
import "./layout.css"


const Background = styled.div`
  background: ${colors.primary};
`

const Layout = ({ children, props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Background>
      <Header siteTitle={data.site.siteMetadata.title} path={props.path} color={colors.primary}/>
      <main style={{margin: '16px'}}>{children}</main>
      <Footer />
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
