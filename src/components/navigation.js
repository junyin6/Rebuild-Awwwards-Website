import React, { useState } from "react"
import { Container, Flex } from "../styles/globalStyles"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
  NavVideos,
} from "../styles/navigationStyles"
import { FooterContent, FooterSocial, FooterNav } from "../styles/footerStyles"
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"

const navRoutes = [
  {
    id: 0,
    title: "not humble",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  { id: 1, title: "bleeping easy", path: "/bleeping-easy", video: "easy.mp4" },
  {
    id: 2,
    title: "make it zero",
    path: "/make-it-zero",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "takes an island",
    path: "/it-takes-an-island",
    video: "it-takes-an-island.mp4",
  },
  { id: 4, title: "50 beaches", path: "/50-beaches", video: "50-beaches.mp4" },
]

const Navigation = ({ setToggleMenu, toggleMenu, onCursor }) => {
  const [revealVid, setRevealVid] = useState({
    show: false,
    video: "featured-video.mp4",
    key: "0",
  })
  return (
    <>
      <AnimatePresence>
        {/*must provide a enterence and exit otherwise toggle wont work */}
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Projects</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map(e => (
                    <li
                      key={e.id}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Link to={`/projects/${e.path}`}>
                        <motion.div
                          className="link"
                          initial={{ x: -108 }}
                          onHoverStart={() =>
                            setRevealVid({
                              show: true,
                              key: e.id,
                              video: e.video,
                            })
                          }
                          onHoverEnd={
                            () =>
                              setRevealVid({
                                show: false,
                                key: e.id,
                                video: e.video,
                              })
                            //   setRevealVid(el => ({ ...el, show: false }))
                          }
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          {e.title}
                        </motion.div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                {/* <FooterNav> */}
                <Flex spaceBetween>
                  <FooterContent>
                    <p>info@furrow.studio</p>
                  </FooterContent>
                  <FooterContent wide>
                    <p>902.234.4123</p>
                  </FooterContent>
                  <FooterSocial>
                    <a
                      href=""
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Instagram />
                    </a>
                    <a
                      href=""
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Facebook />
                    </a>
                    <a
                      href=""
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Vimeo />
                    </a>
                  </FooterSocial>
                </Flex>
                {/* </FooterNav> */}
              </NavFooter>
              <NavVideos>
                <motion.div
                  animate={{ width: revealVid.show ? 0 : "100%" }}
                  className="reveal"
                ></motion.div>
                <div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVid.key}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      src={require(`../assets/video/${revealVid.video}`)}
                      loop
                      autoPlay
                      muted
                    />
                  </AnimatePresence>
                </div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
