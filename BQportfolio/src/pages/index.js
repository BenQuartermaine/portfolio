import React, { Fragment } from "react"
import LandingText from "../components/LandingText"
import Header from "../components/header"
import Footer from "../components/Footer"
import { colors } from "../utilities"
import styled from "styled-components"

const TextWrapper = styled.div`
  min-height: calc(100vh - 90px);
  align-items: center;
  display: flex;
  padding: 32px;
  background: ${colors.primary};
  max-width: 700px;

`;

const IndexPage = props => (
  <Fragment>
    <Header path={props.path} color={colors.primary} />
    <TextWrapper>
      <LandingText />
    </TextWrapper>
    <Footer />
  </Fragment>
)

export default IndexPage
