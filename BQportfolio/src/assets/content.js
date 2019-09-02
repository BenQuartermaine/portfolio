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
	content: ['Hi there. I’m Ben, a designer who codes. Previously I worked as a product designer for Mandala Group in China.', 'Currently I build web apps for Dark Green Design Studio and teach frontend development at Le Wagon Melbourne.', 'I’m passionate about building rigorous and scalable design systems that entire organisations can understand and benefit from.']
}
export const doDonts = {
	title: 'Do / Do Not',
	content: ['I do enjoy the chaotic process of learning.', "I do not enjoy long drawn out meetings that talk in circles and have no clear objective."]
}

export const whatElse = {
	title: 'Other Than Work',
	content: ['I like to boulder, surf and stay pretty active. Exploring the mental health benefits of plant medicine and cooking my way through Ottolenghi’s Simple are also big on my todo list.', "While living in China I put a lot of time into studying Mandarin, so I aggressively try to maintain by learning Chinese pop songs and eves dropping in the CBD.", "At the moment my interests are around design systems, micro dosing, React.js and fighting food packaging waste. I’ve got an idea, if you want to hear it!"]
}

export const tools = [css, figma, html, javascript, medium, react, styledComponents, gatsby, reactSpring];
export const socialIcons = [mailIcon, github, medium, linkedin];




// PROJECTS
export const wholefoods = {
	title: 'Organic Wholefoods',
	description: 'How might we improve access to specific food items for people following a low-FODMAP diet?',
	date: 'April, 2019',
	imageOne: `${wholefoodsCover}`,
	linkText: 'Read on Medium',
	link: 'https://medium.com/@BQWA/organic-wholefoods-ux-case-study-f41e42d38ea1',
	tags: ['UX Design']
}
export const ecze = {
	title: 'Ecze',
	description: 'How might we improve access to holistic solutions for Eczema so that sufferers can reduce their eczema related anxiety?',
	date: 'July, 2019',
	imageOne: `${eczeCover}`,
	linkText: 'View the Website',
	link: 'http://ecze.netlify.com/',
	tags: ['Frontend Development']
}
export const coroster = {
	title: 'CoRoster',
	description: 'How might we improve the rostering experience for Police Officers so that they enjoy a better work-life balance?',
	date: 'September, 2019',
	imageOne: `${corosterCover}`,
	linkText: 'Read on Medium',
	link: 'https://medium.com/@BQWA/ux-case-study-shift-work-police-officers-3c4ac0cdaa42',
	tags: ['UX Design']
}


