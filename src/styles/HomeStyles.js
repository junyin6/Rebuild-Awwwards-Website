import styled from "styled-components"
import { motion } from "framer-motion"

//Banner
export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`
export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`
export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -120px;
  left: -30px;
  color: ${props => props.theme.text};
  pointer-events: none;
`
export const Headline = styled(motion.div)`
  display: block;
  font-size: 20rem;
  font-weight: 900;
  line-height: 0.76;
`
//Content
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
`

export const Content = styled.h2`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${props => props.theme.text};
`
//Featured {HomeFeaturedSection, FeaturedContent, FeaturedVideo, FeaturedProjects}

export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`
export const FeaturedContent = styled(motion.div)`
  display: block;
  position: relative;
  padding-top: 75px;
  width: 90%;
  z-index: 99;
  color: ${props => props.theme.text};
  h3 {
    margin-left: 124px;
    font-size: 1.3rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
      font-size: 1.2rem;
      font-weight: 200;
    }
  }
  .featured-title {
    margin-left: 124px;
    position: relative;
    bottom: -175px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    /* margin: 0; */
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
  }
`
export const FeaturedVideo = styled.div`
  position: absolute;
  top: 0;
  display: block;
  height: 480px;
  width: 100%;
  z-index: -1;
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
export const FeaturedProjects = styled.div`
  margin-top: 200px;
  button {
    background: ${props => props.theme.red};
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    border: none;
    line-height: 1;
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
    span {
      margin-right: 100px;
      display: block;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }
`
//About
export const HomeAboutSection = styled(motion.div)``
export const About = styled.div`
  width: 100%;
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }
  p {
    max-width: 440px;
    font-size: 1rem;
    margin-left: 124px;
    line-height: 1.6rem;
    color: ${props => props.theme.text};
  }
`
export const Services = styled.div``
export const AccordianHeader = styled(motion.div)`
  width: 100%;
  color: ${props => props.theme.red};
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
`
export const AccordianIcon = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 14px;
    height: 4px;
    background: ${props => props.theme.red};
    transition: 0.1 ease-in-out;
  }
`
export const AccordianContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: ${props => props.theme.red};
    display: block;
    font-weight: 300;
  }
`
