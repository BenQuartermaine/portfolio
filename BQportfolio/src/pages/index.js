import React from "react"
import LandingText from "../components/LandingText"
import { colors } from "../utilities"
import styled from "styled-components"
import Layout from "../components/layout"


const Wrapper = styled.div`
  min-height: calc(100vh - 90px);
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  padding: 32px;
  background: ${colors.green};
`;

const IndexPage = props => (
  <Layout props={props}>
    <Wrapper>
      <LandingText
        lead="Hello."
        leadColor={colors.brown}
        sub="I'm Ben, a Product designer who bridges the gap between design and development."
        subColor={colors.light}
        subWeight={400}
      />
    </Wrapper>
  </Layout>
)

export default IndexPage
