import React from "react"
import { HeroText, SubheaderText, colors, media, fontsize } from '../utilities';
import styled from 'styled-components';

const LandingTextWrapper = styled.div`
	display: block;
  z-index: 4;
  max-width: 960px;
`

const HeroTextAvenir = styled(HeroText)`
  font-weight: 400;
  // padding-top: 32px;
`;
const LandingText = () => (
    <LandingTextWrapper>
      <HeroText color={colors.black}>Hi, I'm Ben.</HeroText>
      <HeroTextAvenir color={colors.black}>I'm a UX designer who bridges the gap between design and development.</HeroTextAvenir>
    </LandingTextWrapper>
)

export default LandingText
