import React from "react"
import { BodyText, colors } from '../utilities';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 68px;
	background: ${colors.green};
	color: ${colors.brown};
`;

const Footer = () => (
  <FooterWrapper>
  	<BodyText>Designed and developed by <a style={{color: `${colors.brown}`}} target="_blank" href="https://github.com/BenQuartermaine">BQ</a></BodyText>
  </FooterWrapper>
)

export default Footer
