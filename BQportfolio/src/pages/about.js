import React from "react"
import { HeroText, SubheaderText, fontsize, colors } from '../utilities'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import { about, whatElse } from '../assets/content'

const SectionWrapper = styled.div`
  max-width: 800px;
  padding: 24px 0em;
  margin: 0 auto;
`

const About = props => (
  <Layout props={props}>
    <SEO title="About Page" />
    <SectionWrapper>
      <HeroText color={colors.brown}>{about.title}</HeroText>
      <div>
        {about.content.map(text => 
            <SubheaderText color={colors.light} style={{paddingBottom: fontsize.header}}>{text}</SubheaderText>
          )}
      </div>
    </SectionWrapper>
    <SectionWrapper>
      <HeroText color={colors.brown}>{whatElse.title}</HeroText>
      {whatElse.content.map(text => 
         <SubheaderText color={colors.light} style={{paddingBottom: fontsize.header}}>{text}</SubheaderText>
        )}
    </SectionWrapper>
    <SectionWrapper>
        <HeroText color={colors.brown}>Contact</HeroText>
        <SubheaderText color={colors.light} style={{paddingBottom: fontsize.header}}>
          I write sporadically on <a style={{color: 'white'}} target="_blank" href="https://medium.com/@BQWA">Medium</a>, push all my code to <a style={{color: 'white'}} target="_blank" href="https://github.com/BenQuartermaine">Github</a> and fluff myself up on <a style={{color: 'white'}} target="_blank" href="https://www.linkedin.com/in/benjaminquartermaine/">LinkedIn</a>.
        </SubheaderText>
    </SectionWrapper>
  </Layout>
)

export default About
