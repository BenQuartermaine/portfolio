import eczeCover from './images/ecze-cover-color.png'
import wholefoodsCover from './images/organic.png'
import mofarmCover from './images/mofarm.jpeg'
import corosterSketch from './images/coroster.png'
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
	content: ['Hi there. I’m Ben, a designer who codes. Previously I worked as a product designer for Mandala Group in Shanghai, China.', 'Currently, I design and build web apps for Dark Green Design Studio and teach frontend development at Le Wagon Melbourne.', 'I’m passionate about building rigorous and scalable design systems that entire organisations can understand and benefit from.']
}

export const whatElse = {
	title: 'Other Than Work',
	content: ['I like to boulder, surf and stay pretty active. Exploring the mental health benefits of plant medicine and cooking my way through Ottolenghi’s Simple are also big on my todo list.', "While living in China I put a lot of time into studying Mandarin, so I aggressively try to maintain this by learning Chinese pop songs and eves dropping in the CBD.", "At the moment my interests are in design systems, micro dosing, React.js and fighting food packaging waste. I’ve got an idea, if you want to hear it!"]
}

export const tools = [css, figma, html, javascript, medium, react, styledComponents, gatsby, reactSpring];
export const socialIcons = [mailIcon, github, medium, linkedin];




// PROJECTS
export const wholefoods = {
	title: 'Organic Wholefoods',
	description: ['How might we improve access to products for people following diet so that they can better meet their dieting requirements?', 'In this project I researched consumers shopping habits and tried to understand why they shopped at independent grocers. The research revealed consumers were coming for several reasons but the most common was diet related. Consumers were trying to find products that they couldn’t find elsewhere to aid their diet.', 'My role in this project was UX Research, UX Design and HIFI wireframe development. Deliverables include primary research, personas, storyboards, LOFI through HIFI wireframes.'],
	date: 'January - April, 2019',
	imageOne: `${wholefoodsCover}`,
	linkText: 'Read on Medium',
	link: 'https://medium.com/@BQWA/organic-wholefoods-ux-case-study-f41e42d38ea1',
	tags: ['UX Research, UX Design']
}
export const ecze = {
	title: 'Ecze',
	description: ['Eczema affects 1-in-3 children and 1-in-20 adults. Chances are you’ve experienced it in some way. Most solutions today treat the problem, ignoring the cause. Ecze is trying to change this by offering a platform for holistically approaching eczema.', 'My role in this project was UI Design and Frontend Development. Technologies we used include React.js, Gatsby, Contentful, Styled Components, MailChimp and React Spring.'],
	date: 'March - August, 2019',
	imageOne: `${eczeCover}`,
	linkText: 'View the Website',
	link: 'http://ecze.netlify.com/',
	tags: ['UI Design, Frontend Development']
}
export const coroster = {
	title: 'CoRoster: Humanising Rosters',
	description: ['How might we improve the rostering experience for Police Officers so that they enjoy a better work-life balance?','A project on understanding the shift preferences of police officers and the work-life balance that results. My role in this project was UX Research and UX Design. Deliverables include primary research, personas, design principles, wireframes and usability testing.'],
	date: 'August - September, 2019',
	imageOne: `${corosterSketch}`,
	linkText: 'Read on Medium',
	link: 'https://medium.com/@BQWA/ux-case-study-shift-work-police-officers-3c4ac0cdaa42',
	tags: ['UX Research, UX Design']
}
export const mofarm = {
	title: 'Mandala Group: MoFarm',
	description: ['How might we improve the Left Behind Children issue in rural China?', 'China’s economic growth has been staggering for decades. Hundreds of millions of people have been lifted out of poverty, but it has also created large income disparities where parents leave their rural towns in search of higher wages, often leaving their children behind. With over 66 million Left Behind Children, this project researches the problem and offers solutions to it.', 'My role in this project was lead researcher. Deliverables include primary research (interviews, shadowing and immersion), hypothesis testing and idea iteration. The entire project was done on a shoestring budget and employs lean startup methodologies.'],
	date: 'January - October, 2018',
	imageOne: `${mofarmCover}`,
	linkText: 'Read the Case Study',
	link: 'https://medium.com/@BQWA/ux-case-study-mofarm-bff51d2f4992',
	tags: ['UX Research']
}


