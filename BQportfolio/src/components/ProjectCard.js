import React, { useState } from "react"
import { BodyText, HeaderText, LinkTextStyle, colors } from '../utilities';
import styled from 'styled-components';
import diagonalArrow from '../assets/portfolio-icons/diagonal-arrow.svg'
import { animated, useSpring } from 'react-spring'

const CardWrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
	padding: 32px 0em;
`
const CardHeader = styled.div`
	& p:first-child {
		display: flex;
		justify-content: flex-end;
		padding-bottom: 8px;
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
const Image = styled.div`
	height: 400px;
	width: 100%;
	background-size: cover;
  background-position: center; 
`
const HeaderSubheader = styled.div`
	padding-bottom: 16px;
`
const LinkWrapper = styled(animated.div)`
	padding-top: 16px;

	& .flex-end {
		display: flex;
		justify-content: flex-end;
		align-itmes: center;
		padding: 0px;

	}
	& img {
		margin-bottom: 0px;
		height: 25px;
	}
`

const ProjectCard = ({ project }) => {
		 const [isHovered, setHovered] = useState(false);
		 const buttonAnimation = useSpring({ transform: isHovered ? `translate3d(10px, -5px, 0px)` : `translate3d(0px, 0px, 0px)` })
		 const hoverAnimation = useSpring({ background: isHovered ? `rgba(255, 255, 255, 0.8)` : `rgba(255, 255, 255, 0)` })
		 const textAnimation = useSpring({ opacity: isHovered ? `1` : `0` })
	 
	  return (
	  <CardWrapper>
		  <CardHeader>
			  <BodyText>{project.date}</BodyText>
			  <HeaderSubheader>
				  <HeaderText>{project.title}</HeaderText>
				  <BodyText>{project.description}</BodyText>
			  </HeaderSubheader>
			 </CardHeader>
			 <CardContent
			 	href={project.link}
			 	target="_blank"
    	 	onMouseEnter={() => setHovered(true)}
	     	onMouseLeave={() => setHovered(false)}
			 >
				<Image style={{backgroundImage: `url(${project.imageOne})`}}>
					<HoverDiv style={hoverAnimation}>
					<animated.div style={textAnimation}>
						<BodyText>In this Project I contributed</BodyText>
						<HeaderText>UX, Frontend Development</HeaderText>
					</animated.div>
					</HoverDiv>
				</Image>
			  <LinkWrapper style={buttonAnimation}>
			  	<LinkTextStyle 
			  		style={{textDecoration: 'underline'}}
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
