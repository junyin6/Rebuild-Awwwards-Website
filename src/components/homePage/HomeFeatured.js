import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Container, Flex } from "../../styles/globalStyles"
import { motion, useAnimation } from "framer-motion"
import {
  HomeFeaturedSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedProjects,
} from "../../styles/HomeStyles"
import { useInView } from "react-intersection-observer"

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }, //ease: [0.6, 0.05, -0.01, 0.9]
  },
  hidden: { opacity: 0, y: 72 },
}

const HomeFeatured = ({ onCursor, toggleMenu, setToggleMenu }) => {
  const [hovered, setHovered] = useState(false)
  const animation = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-250px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [inView, animation])
  return (
    <HomeFeaturedSection
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={variants}
    >
      <Container>
        <Link>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween noHeight>
              <h3>Featured Project</h3>
              <div className="meta">
                <h4>PEI Seafood</h4>
                <h4>2019</h4>
              </div>
            </Flex>
            <h2 className="featured-title">
              NOT <br /> HUMBLE
              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.1, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              loop
              autoPlay
              muted
              src={require("../../assets/video/featured-video.mp4")}
            />
          </FeaturedVideo>
        </Link>
      </Container>
      <Container>
        <FeaturedProjects
          onMouseEnter={() => onCursor("hovered")}
          onMouseLeave={onCursor}
        >
          <Flex flexEnd>
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              {console.log(toggleMenu)}
              <span>All Projects</span>
            </button>
          </Flex>
        </FeaturedProjects>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured
