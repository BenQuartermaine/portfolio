import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { HeaderText, colors, media } from '../utilities'
import BurgerMenu from './BurgerMenu'
import Navigation from './Navigation'


const HeaderWrapper = styled.header`
  z-index: 10;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0em 32px;
  background: ${colors.primary};
  & a {
    text-decoration: none;
    color: ${colors.neutral};
  }
  ${media.med`
    padding: 0em 16px;
  `}
`;

const BurgerWrapper = styled.div`
  display: none;
  ${media.small`
    display: flex;
  `}
`;

const NavigationDisplay = styled.div`
  display: block;
  ${media.small`
    display: none;
  `}
`;

const Header = ({ path }) => {
  return (
    <HeaderWrapper>
      {/* <HeaderText><Link to="/">BQ</Link></HeaderText> */}
      <NavigationDisplay>
        <Navigation path={path} />
      </NavigationDisplay>
      <BurgerWrapper>
        <BurgerMenu path={path} />
      </BurgerWrapper>
    </HeaderWrapper>
  )
}


export default Header
