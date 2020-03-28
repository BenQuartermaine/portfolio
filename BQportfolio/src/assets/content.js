import eczeCover from './images/ecze-cover-color.png'
import wholefoodsCover from './images/organic.png'
import mofarmCover from './images/mofarm.png'
import corosterSketch from './images/coroster.png'

// ABOUT PAGE
export const about = {
	title: 'About',
	content: [
	'Hello. I’m Ben.', 
	'Currently, I\'m a product designer at Ausmed and an occasional frontend teacher at Le Wagon Melbourne.',
	'Previously, I was a product designer for Mandala Group in Shanghai. I’m passionate about building scalable design systems.']
}

export const whatElse = {
	title: 'Other Than Work',
	content: ['I like to boulder, surf and stay active. Exploring the mental health benefits of plant medicine and cooking my way through Ottolenghi’s Simple are big on my todo list.', "While living in China I put a lot of time into studying Mandarin, so I aggressively try to maintain this by learning Chinese pop songs and eves dropping in the CBD."]
}

// PROJECTS
export const wholefoods = {
	title: 'Organic Wholefoods',
	description: ['How might we improve access to products for people following diet so that they can better meet their dieting requirements?', 'In this project I researched consumers shopping habits and tried to understand why they shopped at independent grocers.'],
	date: 'January - April, 2019',
	imageOne: `${wholefoodsCover}`,
	linkText: 'Read on Medium',
	link: 'https://medium.com/@BQWA/organic-wholefoods-ux-case-study-f41e42d38ea1',
	tags: ['UX Research, UI Design']
}
export const ecze = {
	title: 'Ecze',
	description: ['Eczema affects 1-in-3 children and 1-in-20 adults. Chances are you’ve experienced it in some way. Most solutions today treat the problem, ignoring the cause. Ecze is trying to change this by offering a platform for holistically approaching eczema.'],
	date: 'March - August, 2019',
	imageOne: `${eczeCover}`,
	linkText: 'View the Website',
	link: 'http://ecze.netlify.com/',
	tags: ['UI Design, Frontend Development']
}
export const coroster = {
	title: 'CoRoster',
	description: ['How might we improve the rostering experience for Police Officers so that they enjoy a better work-life balance?','A project on understanding the shift preferences of police officers and the work-life balance that results.'],
	date: 'August - September, 2019',
	imageOne: `${corosterSketch}`,
	linkText: 'Read on Medium',
	link: 'https://medium.com/@BQWA/ux-case-study-shift-work-police-officers-3c4ac0cdaa42',
	tags: ['UX Research, UX Design']
}
export const mofarm = {
	title: 'MoFarm',
	description: ['How might we improve the Left Behind Children issue in rural China?', "Hundreds of millions of people have been lifted out of poverty in China's pursuit of economic growth, but it has also created large income disparities causing parents to leave their rural towns in search of higher wages, often leaving their children behind. With over 66 million Left Behind Children, this project researches the problem and offers solutions to it."],
	date: 'January - October, 2018',
	imageOne: `${mofarmCover}`,
	linkText: 'Read on Medium',
	link: 'https://medium.com/@BQWA/ux-case-study-mofarm-bff51d2f4992',
	tags: ['Research, User Testing']
}
