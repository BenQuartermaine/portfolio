import React from "react"
import styled from "styled-components"
import { LinkText, colors, fontsize, media } from "../utilities"

const Navigation = ({ color, path }) => {
	const NavigationWrapper = styled.div`
		display: flex;
		height: 42px;
		& a {
			transition: 0.2s;
			font-size: ${fontsize.subheader};
			color: ${colors.almostWhite};
			margin: 0px 4px;
			&:hover {
				transition: 0.2s;
				border-bottom: 2px solid ${colors.almostWhite};
			}
		}
	
		${media.small`
			// flex-direction: column;
			& a {
				border-bottom: 2px solid ${colors.black};
		`}
	`
	const navArray = [
		{ title: "Work", link: "/work/"},
		{ title: "About / Contact", link: "/about/"},
	]

	return (
		<NavigationWrapper>
			{navArray.map((item, i) => {
				return item.link === path ? (
					<LinkText 
						key={i} 
						to='/' 
						style={{borderBottom: `2px solid ${colors.almostWhite}`}}
					>
						{`${item.title}`}{" "}
					</LinkText>
				) : (
						<LinkText 
						key={i} 
						to={item.link}
		     	 	>
							{" "}
							{item.title}
					</LinkText>
				)
			})}
		</NavigationWrapper>
	)
}

export default Navigation
