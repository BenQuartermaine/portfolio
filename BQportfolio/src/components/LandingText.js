import React from "react"
import { HeroText} from '../utilities';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LandingTextWrapper = styled.div`
	display: block;
  z-index: 4;
  max-width: 960px;
`
const LandingText = props => (
  <LandingTextWrapper>
    <HeroText color={props.leadColor}>{props.lead}</HeroText>
    <HeroText color={props.subColor} weight={props.subWeight || 400}>{props.sub}</HeroText>
  </LandingTextWrapper>
)

LandingText.propTypes = {
  leadColor: PropTypes.string,
  subColor: PropTypes.string,
  lead: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  subWeight: PropTypes.number
}

export default LandingText
