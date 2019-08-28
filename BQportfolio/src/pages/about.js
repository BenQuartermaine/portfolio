import React from "react"
import { HeroText, HeaderText, SubheaderText, BodyText } from '../utilities'
import Layout from "../components/layout"
import SEO from "../components/seo"
import IconGrid from "../components/IconGrid"
import SocialMedia from "../components/SocialMedia"
import styled from 'styled-components'
import { about } from '../assets/content'

const SectionWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 3em 0em;
`
const ContentWrapper = styled.div`
  
`

const About = props => (
  <Layout props={props}>
    <SEO title="About Page" />
    <SectionWrapper>
      <HeroText>{about.title}</HeroText>
    	<HeaderText style={{fontWeight: '400'}}>{about.content}</HeaderText>
    </SectionWrapper>
    <SectionWrapper>
        <HeroText>Contact</HeroText>
        <ContentWrapper>
            <SocialMedia />
        </ContentWrapper>
    </SectionWrapper>

    <SectionWrapper>
        <HeroText>Tools</HeroText>
        <ContentWrapper>
            <IconGrid />
        </ContentWrapper>
    </SectionWrapper>
  </Layout>
)

export default About
