import React from "react"
import BurgerMenu from "../components/BurgerMenu"
import LandingText from "../components/LandingText"
import Navigation from "../components/Navigation"
import { colors, media } from "../utilities"
import styled from "styled-components"



const IndexWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${colors.black};
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.small`
    padding: 24px;
  `}
`

const NavigationWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 1;

  ${media.small`
    // position: initial;

    // // display: flex;
    // // // flex-direction: column;
    // // justify-content: center;

  `}
`;


const IndexPage = props => (
  <IndexWrapper>
    <LandingText />
    <NavigationWrapper>
      <Navigation path={ props.path } />
    </NavigationWrapper>
  </IndexWrapper>
)

export default IndexPage
