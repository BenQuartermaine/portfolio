import eczeCover from './images/ecze-cover.png'
import wholefoodsCover from './images/wholefoods-cover.png'
import corosterCover from './images/coroster-cover.jpeg'
// TOOLS IMAGES IMPORT
import css from './portfolio-icons/css.png'
import figma from './portfolio-icons/figma.png'
import gatsby from './portfolio-icons/gatsby.png'
import html from './portfolio-icons/html.png'
import javascript from './portfolio-icons/javascript.png'
import medium from './portfolio-icons/medium.png'
import reactSpring from './portfolio-icons/react-spring.png'
import react from './portfolio-icons/react.png'
import styledComponents from './portfolio-icons/styled-comp.png'
// SOCIAL MEDIA ICONS
import github from '../assets/portfolio-icons/github.svg'
import linkedin from '../assets/portfolio-icons/linkedin.svg'
import mailIcon from '../assets/portfolio-icons/mail-icon.svg'


// ABOUT PAGE
export const about = {
	title: 'About',
	content: ['I got my start in UX design at Mandala Group, a company I co-founded in China with two highly inspirational individuals.', 'During my time at Mandala Group I undertook two key roles. The first was UX design lead. We ran 4-week idea incubation programs that allowed entrepreneurs, designers and coders from all across the world to come to China and work on one of our current projects.', 'The second role was product designer. Leading a small team of researchers and designers through rural Hunan, we spent weeks at a time collecting data, interviewing villagers and synthesizing these trips into tangible design briefs.','As a group we focused heavily on finding solutions for the Left Behind Children issue. The result was MoFarm.']
}

export const tools = [css, figma, html, javascript, medium, react, styledComponents];
export const socialIcons = [mailIcon, github, medium, linkedin];




// PROJECTS
export const wholefoods = {
	title: 'Organic Wholefoods',
	description: 'How might we improve access to specific food items for people following a low-FODMAP diet?',
	date: 'April, 2019',
	imageOne: `${wholefoodsCover}`,
	linkText: 'Read on Medium',
	link: 'https://medium.com/@BQWA/organic-wholefoods-ux-case-study-f41e42d38ea1',
	tags: ['UX Design,', 'Wireframes']
}
export const ecze = {
	title: 'Ecze',
	description: 'How might we improve access to holistic solutions for Eczema so that sufferers can reduce their eczema related anxiety?',
	date: 'July, 2019',
	imageOne: `${eczeCover}`,
	linkText: 'View the Website',
	link: 'https://ecze.co',
	tags: ['Frontend Development']
}
export const coroster = {
	title: 'CoRoster',
	description: 'How might we improve the rostering experience for Police Officers so that they enjoy a better work-life balance?',
	date: 'September, 2019',
	imageOne: `${corosterCover}`,
	linkText: 'Read on Medium',
	link: 'https://medium.com/@BQWA/ux-case-study-shift-work-police-officers-3c4ac0cdaa42',
	tags: ['UX Design,', 'Wireframes']
}


