import React from "react"
import { HeroText, SubheaderText, colors, media, fontsize } from '../utilities';
import styled from 'styled-components';

const LandingTextWrapper = styled.div`
	display: block;
	z-index: 4;
	max-width: 720px;
`;

const LandingText = () => (
    <LandingTextWrapper>
      <HeroText color={colors.almostWhite}>Hi, I'm Ben.</HeroText>
      <HeroText color={colors.almostWhite}>A designer who codes.</HeroText>
      <SubheaderText color={colors.almostWhite}>I’m not trying to be the unicorn that does both. Think of me as the conduit between beautiful design and technical feasibility.</SubheaderText>
    </LandingTextWrapper>
)

export default LandingText
