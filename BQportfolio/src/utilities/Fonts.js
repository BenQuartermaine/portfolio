import styled from 'styled-components';
import { Link } from "gatsby";
import { colors } from './Colors'

const fontsize = {
	hero: '52px',
	header: '36px',
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
`;

export const HeaderText = styled.h1`
	${presets}
	font-size: ${fontsize.header};
	font-family: 'Avenir';

`;

export const BodyText = styled.p`
	${presets}
	font-size: ${fontsize.body};
	font-family: 'Georgia';
`;

export const LinkText = styled(Link)`
	${presets}
	font-family: 'Georgia';
	font-size: ${fontsize.header};
	margin: 0em;
	list-style: none;
	text-decoration: none;
	transition: 0.2s;
	padding: 8px;
	&:hover {
		cursor: pointer;
		}	
	}
`;
