import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { HeaderText, colors } from "../utilities"
import BurgerMenu from "./BurgerMenu"

const HeaderWrapper = styled.header`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0em 2em;
  color: ${colors.almostWhite};
  background: ${colors.black};
`

const Header = ({ siteTitle, path }) => (
  <HeaderWrapper>
    <HeaderText>Ben Quartermaine</HeaderText>
    <BurgerMenu path={path} />
  </HeaderWrapper>
)

export default Header
