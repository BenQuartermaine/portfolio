import React from "react"
import { HeroText, SubheaderText, fontsize, colors } from '../utilities'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import { about, whatElse } from '../assets/content'

const SectionWrapper = styled.div`
  max-width: 700px;
  padding: 32px 0em;
`
const ContentWrapper = styled.div`
  max-width: 700px;
`

const About = props => (
  <Layout props={props}>
    <SEO title="About Page" />
    <SectionWrapper>
      <HeroText color={colors.secondary}>{about.title}</HeroText>
      <div>
        {about.content.map(text => 
            <SubheaderText color={colors.neutral} style={{paddingBottom: fontsize.header}}>{text}</SubheaderText>
          )}
      </div>
    </SectionWrapper>
    <SectionWrapper>
      <HeroText color={colors.secondary}>{whatElse.title}</HeroText>
      {whatElse.content.map(text => 
         <SubheaderText color={colors.neutral} style={{paddingBottom: fontsize.header}}>{text}</SubheaderText>
        )}
    </SectionWrapper>
    <SectionWrapper>
        <HeroText color={colors.secondary}>Contact</HeroText>
        <ContentWrapper>
          <SubheaderText color={colors.neutral} style={{paddingBottom: fontsize.header}}>
            I write sporadically on <a style={{color: 'white'}} target="_blank" href="https://medium.com/@BQWA">Medium</a>, push all my code to <a style={{color: 'white'}} target="_blank" href="https://github.com/BenQuartermaine">Github</a> and fluff myself up on <a style={{color: 'white'}} target="_blank" href="https://www.linkedin.com/in/benjaminquartermaine/">LinkedIn</a>.
          </SubheaderText>
        </ContentWrapper>
    </SectionWrapper>
  </Layout>
)

export default About
