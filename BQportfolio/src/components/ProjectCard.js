import React, { useState } from "react"
import { BodyText, HeaderText, LinkTextStyle, media, fontsize } from '../utilities';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring'

const CardWrapper = styled(animated.div)`
	max-width: 700px;
	margin: 24px auto;
	padding: 32px 32px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	background: white;

	& p:first-child {
		justify-content: flex-end;
		display: flex;
	}

	${media.med`
		flex-direction: column;
		align-items: center;
		& p:first-child {
			padding-bottom: 16px;
		}
	`}
	${media.small`
		padding: 32px 16px;
	`}
`


const Image = styled.img`
  	background-size: cover;
  	background-position: center;
		margin-bottom: 0px; 
		border-radius: 4px;
		min-width: 200px;
`
const HeaderSubheader = styled.div`
	display: flex;
	& div:last-child {
		display: flex;
		justify-content: flex-end;
	}
	${media.med`
		flex-direction: column;
	`}
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
const ImageContainer = styled.a`

	${media.med`
		padding-bottom: 16px;
		width: 100%;
		height: auto;
	`}
`;
const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

const TopDiv = styled.div`
	margin-right: 16px;
	${media.med`
	margin-right: 0px;
	padding-bottom: 16px;
	`}
`;


const ProjectCard = ({ project }) => {
		 const [isHovered, setHovered] = useState(false);
		 const buttonAnimation = useSpring({ transform: isHovered ? `translate3d(4px, -4px, 8px)` : `translate3d(0px, 0px, 0px)` })
		 const underlineAnimation = useSpring({ textDecoration: isHovered ? `underline` : `underline` })
	 
	  return (
	  <CardWrapper>
		<BodyText>{project.date}</BodyText>
		<HeaderSubheader>
			<TopDiv>
				<ImageContainer
				href={project.link}
				target="_blank"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				>
					<Image src={project.imageOne} />
				</ImageContainer>
			</TopDiv>
			<FlexColumn>
				<HeaderText>{project.title}</HeaderText>
				{project.description.map(text => 
					<BodyText style={{paddingBottom: fontsize.body}}>{text}</BodyText>
				)}
				<LinkWrapper style={buttonAnimation}>
				<LinkTextStyle 
					style={underlineAnimation}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					className="flex-end"
				>
					<a href={project.link} target="_blank" style={{color: 'black'}}>{project.linkText}</a>
				</LinkTextStyle>
				</LinkWrapper>
			</FlexColumn>
		</HeaderSubheader>
	  </CardWrapper>
	)
}

export default ProjectCard
