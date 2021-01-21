import React from "react"
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"
const Footer = ({ onCursor }) => {
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>902.234.4123</p>
            <p>info@furrow.studio</p>
          </FooterContent>
          <FooterContent wider>
            <p>15 Cam at Unit B</p>
            <p>Mexico, 11234 </p>
          </FooterContent>
          <FooterSocial>
            <a
              href=""
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Instagram />
            </a>
            <a
              href=""
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Facebook />
            </a>
            <a
              href=""
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
