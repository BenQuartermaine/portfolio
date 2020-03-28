import React from "react"
import { HeroText, colors } from '../utilities';
import styled from 'styled-components';

const LandingTextWrapper = styled.div`
	display: block;
  z-index: 4;
  max-width: 960px;
`
const LandingText = () => (
  <LandingTextWrapper>
    <HeroText color={colors.neutral}>Hello, I'm Ben.</HeroText>
    <HeroText color={colors.neutral} weight={400}>I'm a Product designer who bridges the gap between design and development.</HeroText>
  </LandingTextWrapper>
)

export default LandingText
