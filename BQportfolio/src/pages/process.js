import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Process = props => (
	<Layout props={props}>
		<SEO title="Page two" />
		<h1>Hi from the second page</h1>
		<p>Welcome to page 2</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default Process
