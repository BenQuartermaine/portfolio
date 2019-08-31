import React from "react"
import { HeroText, HeaderText, SubheaderText, BodyText, fontsize } from '../utilities'
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
      {about.content.map(text => 
    	   <HeaderText style={{fontWeight: '400', paddingBottom: fontsize.header}}>{text}</HeaderText>
        )}
    </SectionWrapper>
    <SectionWrapper>
        <HeroText>Contact</HeroText>
        <ContentWrapper>
          <HeaderText style={{fontWeight: '400'}}>
            I write sporadically on <a style={{color: 'black'}} href="">Medium</a>, push all my code to <a style={{color: 'black'}} href="">Github</a> and fluff myself up on <a style={{color: 'black'}} href="">LinkedIn</a>.<br /><br /> For UX design projects, teardowns, coffee and other enquiries, drop me an <a style={{color: 'black'}} href="mailto: ben.quartermaiune3@gmail.com">Email</a>.
          </HeaderText>

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
