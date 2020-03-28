import styled from 'styled-components'
import { Link } from "gatsby"
import { colors } from './Colors'
import { media } from './Breakpoints'
import { animated } from 'react-spring'

export const fontsize = {
	hero: '40px',
	header: '32px',
	subheader: '24px',
	body: '18px'
}

const presets = {
	lineHeight: '140%',
	margin: '0em',
}

// TYPOGRAPHY STYLED COMPONENTS
export const HeroText = styled.h1`
	${presets}
	font-size: ${fontsize.hero};
	color: ${props => props.color};
	font-family: 'Avenir';
	font-weight: ${props => props.weight};

	${media.med`
		font-size: ${fontsize.header};
	`}
`;

export const HeaderText = styled.h1`
	${presets}
	font-size: ${fontsize.header};
	font-family: 'Avenir';

	${media.med`
		font-size: ${fontsize.subheader};
	`}
`;

export const BodyText = styled.p`
	${presets}
	font-size: ${fontsize.body};
	font-family: 'Avenir';
`;

export const SubheaderText = styled.p`
	${presets}
	font-size: ${fontsize.subheader};
	font-weight: 400;
	font-family: 'Avenir';
	color: ${props => props.color};
`;

export const LinkText = styled(Link)`
	${presets}
	font-family: 'Avenir';
	font-size: ${fontsize.body};
	margin: 0em;
	list-style: none;
	text-decoration: none;
	transition: 0.2s;
	padding: 8px;
	color: ${colors.black};
	&:hover {
		cursor: pointer;
		}	
	}
`

// NON GATSBY LINK TEXT
export const LinkTextStyle = styled(animated.p)`
	${presets}
	font-family: 'Avenir';
	font-size: ${fontsize.body};
	margin: 0em;
	list-style: none;
	text-decoration: none;
	transition: 0.2s;
	padding: 8px;
	color: ${colors.black};
	&:hover {
		cursor: pointer;
		}	
	}
`;

