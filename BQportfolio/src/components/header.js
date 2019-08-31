import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { HeaderText, colors, media } from '../utilities'
import BurgerMenu from './BurgerMenu'
import Navigation from './Navigation'


const HeaderWrapper = styled.header`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0em 32px;
  color: ${colors.almostWhite};
  background: ${colors.black};
  & a {
    text-decoration: none;
    color: ${colors.almostWhite};
  }
  ${media.med`
    padding: 0em 16px;

  `}
`;

const BurgerWrapper = styled.div`
  display: none;
  ${media.small`
    display: block;
  `}
`;

const NavigationWrapper = styled.div`
  display: block;
  ${media.small`
    display: none;
  `}
`;

const num = window.innerWidth;

const Header = ({ path }) => {
  return (
    <HeaderWrapper>
      <HeaderText style={{fontSize: '36px'}}><Link to="/">{num > 800 ? 'Ben Quartermaine' : 'BQ'}</Link></HeaderText>
      <NavigationWrapper>
        <Navigation path={path} />
      </NavigationWrapper>
      <BurgerWrapper>
        <BurgerMenu path={path} />
      </BurgerWrapper>
    </HeaderWrapper>
  )
}


export default Header
