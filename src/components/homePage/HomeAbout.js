import React, { useState, useEffect } from "react"
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeAboutSection,
  About,
  Services,
  AccordianHeader,
  AccordianIcon,
  AccordianContent,
} from "../../styles/HomeStyles"
import { motion, useAnimation } from "framer-motion"
import { useGlobalStateContext } from "../../context/globalContext"
import { useInView } from "react-intersection-observer"
const accordianIds = [
  {
    id: 0,
    title: "Pre-production",
    results: ["creative", "writing", "whatever", "things"],
  },
  {
    id: 1,
    title: "Post-production",
    results: ["creative", "writing", "whatever", "things"],
  },
  {
    id: 2,
    title: "Production",
    results: ["creative", "writing", "whatever", "things"],
  },
  {
    id: 3,
    title: "Filming",
    results: ["creative", "writing", "whatever", "things"],
  },
]
const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }, //ease: [0.6, 0.05, -0.01, 0.9]
  },
  hidden: { opacity: 0, y: 72 },
}

const HomeAbout = ({ onCursor }) => {
  const [serviceExpanded, setServiceExpanded] = useState(0)
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px", // adds 300px to the margin so forces animation to pop up after scrolling more
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [inView, animation])
  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      variants={variants}
    >
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              Furrow is an integrated, full-service creative studio offering
              video roduction, creative development, and post-production
              services.
            </h2>
            <p>
              Everybody’s got a story. And we don’t stop until we’ve uncovered
              what makes yours worth telling. Whether it’s working directly with
              you, an agency partner, or putting the finishing touches on
              something special, we’re ready to dig in and get our hands
              dirty—are you?
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordianIds.map((e, i) => (
              <Accordian
                key={i}
                details={e}
                setServiceExpanded={setServiceExpanded}
                serviceExpanded={serviceExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordian = ({
  details,
  serviceExpanded,
  setServiceExpanded,
  onCursor,
}) => {
  const isOpen = serviceExpanded === details.id
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()

  return (
    <>
      <AccordianHeader
        onClick={() => setServiceExpanded(details.id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        onMouseEnter={() => !isOpen && onCursor("hovered")}
        onMouseLeave={onCursor}
        whileHover={{
          color: !isOpen && (currentTheme === "dark" ? "#ffffff" : "#000000"),
        }}
      >
        <AccordianIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
          ></motion.span>
        </AccordianIcon>
        {details.title}
      </AccordianHeader>
      <AccordianContent key="content" animate={{ height: isOpen ? "100%" : 0 }}>
        {details.results.map((e, i) => (
          <span key={i}>{e}</span>
        ))}
      </AccordianContent>
    </>
  )
}

export default HomeAbout
