import React, { useState } from "react"
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeatured from "../components/homePage/HomeFeatured"
import Layout from "../components/layout"
import HomeAbout from "../components/homePage/HomeAbout"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"
const IndexPage = props => {
  const { cursorStyles } = useGlobalStateContext()
  const [toggleMenu, setToggleMenu] = useState(false)
  const dispatch = useGlobalDispatchContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <Layout toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <HomeAbout onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
