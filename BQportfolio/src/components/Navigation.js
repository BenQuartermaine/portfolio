import React from "react"
import styled from "styled-components"
import { LinkText, colors, fontsize, media } from "../utilities"

const Navigation = ({ path }) => {
	const NavigationWrapper = styled.div`
		display: flex;
		height: 42px;
		& a {
			transition: 0.2s;
			font-size: ${fontsize.subheader};
			color: ${colors.light};
			margin: 0px 4px;
			&:hover {
				transition: 0.2s;
				border-bottom: 2px solid ${colors.light};
			}
		}
	
		${media.small`
			& a {
				border-bottom: 2px solid ${colors.light};
		`}
	`
	const navArray = [
		{ title: "Home", link: "/"},
		{ title: "Work", link: "/work/"},
		{ title: "About", link: "/about/"},
	]

	return (
		<NavigationWrapper>
			{navArray.map((item, i) => {
				return item.link === path ? (
					<LinkText 
						key={i} 
						to='/' 
						style={{borderBottom: `2px solid ${colors.light}`}}
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
