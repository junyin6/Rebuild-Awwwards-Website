import React, { useEffect } from "react"
import { Container } from "../../styles/globalStyles"
import { HomeContentSection, Content } from "../../styles/HomeStyles"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }, //ease: [0.6, 0.05, -0.01, 0.9]
  },
  hidden: { opacity: 0, y: 72 },
}
const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px", // adds 300px to the margin so forces animation to pop up after scrolling more
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [inView, animation])

  return (
    <HomeContentSection
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={variants}
    >
      <Container>
        <Content>
          Great stories don’t just happen— <br />
          they need to be uncovered. And we dig <br />
          deep to discover the great stories that <br />
          lie just below the surface. Dirt under <br />
          our fingernails and all.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
