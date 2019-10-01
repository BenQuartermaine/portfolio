import React, { Fragment } from "react"
import BurgerMenu from "../components/BurgerMenu"
import LandingText from "../components/LandingText"
import Navigation from "../components/Navigation"
import ProjectCard from "../components/ProjectCard"
import Header from "../components/header"
import Footer from "../components/Footer"
import { colors, media } from "../utilities"
import styled from "styled-components"
import { wholefoods, mofarm, coroster, ecze } from '../assets/content'





const AboveWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: ${colors.black};

  ${media.small`
    padding: 24px;
  `}
`;
const BelowWrapper = styled.div`
  background: ${colors.almostWhite};

`;

const TextWrapper = styled.div`
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
`;


const IndexPage = props => (
  <Fragment>
    <AboveWrapper>
      <Header />
      <TextWrapper>
        <LandingText />
      </TextWrapper>
    </AboveWrapper>
    <BelowWrapper>
      <ProjectCard project={ coroster } />
      <ProjectCard project={ wholefoods } />
      <ProjectCard project={ mofarm } />
      <ProjectCard project={ ecze } />
    </BelowWrapper>
    <Footer />
  </Fragment>
)

export default IndexPage
