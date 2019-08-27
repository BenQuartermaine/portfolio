import React from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"
import { HeroTextUnderlined } from '../utilities'
import { wholefoods, ecze, coroster } from '../assets/content'


const Work = props => {
	return (
		<Layout props={ props }>
			<HeroTextUnderlined>Work</HeroTextUnderlined>
			<ProjectCard project={ coroster } />
			<ProjectCard project={ ecze } />
			<ProjectCard project={ wholefoods } />
		</Layout>
	)
}

export default Work
