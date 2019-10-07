import React, { useState } from "react"
import { BodyText, HeaderText, SubheaderText, LinkTextStyle, colors, media, fontsize } from '../utilities';
import styled from 'styled-components';
import diagonalArrow from '../assets/portfolio-icons/diagonal-arrow.svg'
import { animated, useSpring } from 'react-spring'

const CardWrapper = styled(animated.div)`
	max-width: 960px;
	margin: 24px auto;
	padding: 32px 32px;
	border-radius: 4px;
	display: flex;
	background: white;

	${media.med`
		flex-direction: column;
		align-items: center;
	`}
	${media.small`
		padding: 32px 16px;
	`}
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
	padding-bottom: 16px;
	text-align: right;
`

const Image = styled.img`
height: auto;
width: 500px;
  background-size: cover;
  background-position: center;
  margin-bottom: 0px; 
`
const HeaderSubheader = styled.div`
	padding-left: 24px;
	& div:last-child {
		display: flex;
		justify-content: flex-end;
	}
	& div:first-child {
		display: flex;
		justify-content: flex-end;
	}
`
const LinkWrapper = styled(animated.div)`
	padding-right: 4px;
	& .flex-end {
		display: flex;
		justify-content: flex-end;
	}
	& img {
		margin-bottom: 0px;
		height: 25px;
	}
`
const ImageContainer = styled.div`
	width: 250px;
	height: 250px;

	${media.med`
		padding-bottom: 16px;
		width: 100%;
		height: auto;
	`}
`

const ProjectCard = ({ project }) => {
		 const [isHovered, setHovered] = useState(false);
		 const buttonAnimation = useSpring({ transform: isHovered ? `scale3d(4px, -4px, 8px)` : `translate3d(0px, 0px, 0px)` })
		 const underlineAnimation = useSpring({ textDecoration: isHovered ? `underline` : `underline` })
	 
	  return (
	  <CardWrapper>
			 <CardContent
			 	href={project.link}
			 	target="_blank"
    	 	onMouseEnter={() => setHovered(true)}
	     	onMouseLeave={() => setHovered(false)}
			 >
				 <ImageContainer>
					<Image src={project.imageOne} />
				 </ImageContainer>
			 </CardContent>
			<HeaderSubheader>
				<BodyTextGeorgia>{project.date}</BodyTextGeorgia>
				<HeaderText>{project.title}</HeaderText>
				{project.description.map(text => 
					<BodyText style={{paddingBottom: fontsize.body}}>{text}</BodyText>
				)}
				<LinkWrapper style={buttonAnimation}>
			  	<LinkTextStyle 
			  		style={underlineAnimation}
			  		className="flex-end"
			  	>
			  	{project.linkText}	
			  		<img src={diagonalArrow} alt=""/>
			  	</LinkTextStyle>
			  </LinkWrapper>
			</HeaderSubheader>
	  </CardWrapper>
	)
}

export default ProjectCard
