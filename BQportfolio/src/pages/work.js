import React from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"
import { HeroTextUnderlined } from '../utilities'
import { wholefoods, mofarm, coroster } from '../assets/content'


const Work = props => {
	return (
		<Layout props={ props }>
			<ProjectCard project={ coroster } />
			<ProjectCard project={ wholefoods } />
			<ProjectCard project={ mofarm } />
		</Layout>
	)
}

export default Work
