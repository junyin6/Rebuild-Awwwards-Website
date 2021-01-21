import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"
import useElementPosition from "../hooks/useElementPosition"

const Header = ({
  onCursor,
  setToggleMenu,
  toggleMenu,
  setMenuPos,
  menuPos,
}) => {
  const { currentTheme } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const menu = useRef(null)
  const position = useElementPosition(menu)
  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }
  const menuHover = () => {
    onCursor("locked")
    setMenuPos({ x: position.x, y: position.y + 72 })
  }
  useEffect(() => {
    // localstorage to set the theme on change
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])
  //ease  duration: 1, ease: [0.6, 0.05, -0.01, 0.9]
  return (
    <HeaderNav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        {console.log(currentTheme)}
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link to="/">YOUR</Link>
            <span
              type="button"
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            ></span>
            <Link to="/">UGLY</Link>
          </Logo>
          <Menu
            ref={menu}
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
