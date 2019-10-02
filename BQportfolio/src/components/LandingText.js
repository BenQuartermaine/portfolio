import React from "react"
import { HeroText, SubheaderText, colors, media, fontsize } from '../utilities';
import styled from 'styled-components';

const LandingTextWrapper = styled.div`
	display: block;
	z-index: 4;
`;
const HeroTextGeorgia = styled(HeroText)`
  font-family: 'Georgia';
  font-weight: 400;
  padding-top: 32px;
`
const HeroTextAvenir = styled(HeroText)`
  font-weight: 400;
  padding-top: 32px;
`
const LandingText = () => (
    <LandingTextWrapper>
      <HeroTextGeorgia color={colors.almostWhite}>Hi, I'm Ben.</HeroTextGeorgia>
      <HeroTextAvenir color={colors.almostWhite}>I bridge the gap between design and development, and take projects from ideation to implementation.</HeroTextAvenir>
    </LandingTextWrapper>
)

export default LandingText
