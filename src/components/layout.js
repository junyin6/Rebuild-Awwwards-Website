import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"
import Header from "./header"
import Footer from "../components/footer"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"
import Cursor from "./customCursor"
import Navigation from "./navigation"
const GlobalStyle = createGlobalStyle`
${normalize}
*{
  text-decoration: none;
  cursor: none; 
}

html{
  box-sizing: border-box;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}

body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segeo UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${props => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden
}
`

const Layout = ({ children, toggleMenu, setToggleMenu }) => {
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 })
  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
    left: `${menuPos.x}px`,
    top: `${menuPos.y}px`,
  }
  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea291e", //00bfff
    left: `${menuPos.x}px`,
    top: `${menuPos.y}px`,
  }
  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor toggleMenu={toggleMenu} />
      <Header
        menuPos={menuPos}
        setMenuPos={setMenuPos}
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Navigation
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <main>{children}</main>
      <Footer onCursor={onCursor} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
