import React from "react"
import { BodyText, colors, LinkTextStyle } from '../utilities';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	background: ${colors.black};
	color: ${colors.almostWhite};
	padding: 0em 2em;
`;

const Footer = () => (
  <FooterWrapper>
  	<BodyText>Designed and developed by <a style={{color: `${colors.almostWhite}`}} target="_blank" href="https://github.com/BenQuartermaine">BQ</a></BodyText>
  </FooterWrapper>
)

export default Footer
