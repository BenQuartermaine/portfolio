import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { HeaderText, colors, media } from '../utilities'
import BurgerMenu from './BurgerMenu'
import Navigation from './Navigation'


const HeaderWrapper = styled.header`
  z-index: 10;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0em 32px;
  background: ${colors.almostWhite};
  & a {
    text-decoration: none;
    color: ${colors.black};
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

const Header = ({ path, color }) => {
  return (
    <HeaderWrapper>
      <HeaderText><Link to="/">BQ</Link></HeaderText>
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
