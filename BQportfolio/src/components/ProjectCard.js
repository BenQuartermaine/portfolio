import React, { useState } from "react"
import { BodyText, HeaderText, SubheaderText, LinkTextStyle, colors, media } from '../utilities';
import styled from 'styled-components';
import diagonalArrow from '../assets/portfolio-icons/diagonal-arrow.svg'
import { animated, useSpring } from 'react-spring'

const CardWrapper = styled(animated.div)`
	max-width: 800px;
	margin: 0 auto;
	padding: 24px;
	border-radius: 4px;
	margin-bottom: 24px;

	${media.small`
		padding: 16px;
	`}
`
const CardHeader = styled.div`
	& p:first-child {
		display: flex;
		justify-content: flex-end;
		padding-bottom: 8px;
	}	
	& p:last-child {
		display: flex;
		justify-content: flex-end;
		padding: 16px 0px;
		
		${media.small`
			justify-content: flex-start;
		`}
	}
`
const CardContent = styled.a`
	text-decoration: none;
	color: ${colors.black};
`

const HoverDiv = styled(animated.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;

	& div:first-child {
		text-align: center;
	}

`
const BodyTextGeorgia = styled(BodyText)`
	font-family: 'Georgia';
`

const Image = styled.img`
	width: 100%;
  height: auto;
	background-size: cover;
  background-position: center;
  margin-bottom: 0px; 
`
const HeaderSubheader = styled.div`
	// padding-bottom: 8px;
`
const LinkWrapper = styled(animated.div)`
	padding-top: 16px;
	padding-right: 4px;
	& .flex-end {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0px;
	}
	& img {
		margin-bottom: 0px;
		height: 25px;
	}
`

const ProjectCard = ({ project }) => {
		 const [isHovered, setHovered] = useState(false);
		 const buttonAnimation = useSpring({ transform: isHovered ? `scale3d(4px, -4px, 8px)` : `translate3d(0px, 0px, 0px)` })
		 const hoverAnimation = useSpring({ boxShadow: isHovered ? `0px 0px 30px rgba(0, 0, 0, 0.25)` : `0px 0px 10px rgba(0, 0, 0, 0.25)` })
		 const underlineAnimation = useSpring({ textDecoration: isHovered ? `underline` : `underline` })
	 
	  return (
	  <CardWrapper style={hoverAnimation}>

		  <CardHeader>
			  <HeaderSubheader>
			  		<BodyTextGeorgia>{project.date}</BodyTextGeorgia>
					  <HeaderText>{project.title}</HeaderText>
					  <BodyText>{project.description}</BodyText>
			  	<div>
				  	<BodyTextGeorgia>{project.tags.map(tag => `${tag} `)}</BodyTextGeorgia>
			  	</div>
			  </HeaderSubheader>
			 </CardHeader>
			 <CardContent
			 	href={project.link}
			 	target="_blank"
    	 	onMouseEnter={() => setHovered(true)}
	     	onMouseLeave={() => setHovered(false)}
			 >
					<Image src={project.imageOne} />
			  <LinkWrapper style={buttonAnimation}>
			  	<LinkTextStyle 
			  		style={underlineAnimation}
			  		className="flex-end"
			  	>
			  	{project.linkText}	
			  		<img src={diagonalArrow} alt=""/>
			  	</LinkTextStyle>
			  </LinkWrapper>
			 </CardContent>

	  </CardWrapper>
	)
}

export default ProjectCard
