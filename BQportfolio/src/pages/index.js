import React from "react"
import BurgerMenu from "../components/BurgerMenu"
import LandingText from "../components/LandingText"
import Navigation from "../components/Navigation"
import VideoBackground from "../components/VideoBackground"
import { colors, media } from "../utilities"
import styled from "styled-components"

const IndexWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${colors.black};
  padding: 2em;
  display: flex;
  justify-content: space-between;
  
  ${media.med`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  `}

`

const BurgerWrapper = styled.div`
  display: none;
  ${media.small`
    display: flex;
    justify-content: flex-end;
  `}
`;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  ${media.small`
    display: none;
  `}
`;


const IndexPage = props => (
  <IndexWrapper>
    <LandingText />
    <NavigationWrapper>
      <Navigation path={ props.path } />
    </NavigationWrapper>
    <BurgerWrapper>
      <BurgerMenu path={ props.path } /> 
    </BurgerWrapper>
    <VideoBackground />
  </IndexWrapper>
)

export default IndexPage
