/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, {ThemeProvider} from 'styled-components'
import {Grey} from '../../themes/Grey'
import {Header} from "../header"
//import "./layout.css"
import GlobalStyle from '../GlobalStyle'
import {Main} from '../Main'
import {Footer} from '../Footer'

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45 ruby-merge;
  padding-top: 0;
`

const Layout = ({ children }) => {
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
    <ThemeProvider theme={Grey}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }