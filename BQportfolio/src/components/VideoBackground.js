import React from "react"
import styled from 'styled-components';
import iteration from '../assets/iteration.mp4'
import { media } from '../utilities'

const VideoWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;

	${media.small`
		display: none;
	`}
`;

const videoStyles = {
	objectFit: 'cover',
  width: '100%',
  height: '100%'
}

const VideoBackground = () => (
	<VideoWrapper>
	  <video style={videoStyles} src={iteration} autoPlay muted loop />
	</VideoWrapper>
)

export default VideoBackground

