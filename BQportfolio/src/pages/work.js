import React from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"
import CaseStudyCard from "../components/CaseStudyCard"
import { wholefoods, mofarm, coroster, ecze } from '../assets/content'


const Work = props => {
	return (
		<Layout props={ props }>
			
			<CaseStudyCard project= { coroster } />
			<ProjectCard project={ coroster } />
			<ProjectCard project={ wholefoods } />
			<ProjectCard project={ mofarm } />
			<ProjectCard project={ ecze } />
		</Layout>
	)
}

export default Work
