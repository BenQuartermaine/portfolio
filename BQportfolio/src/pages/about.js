import React from "react"
import { HeroText, HeaderText, SubheaderText, BodyText, fontsize } from '../utilities'
import Layout from "../components/layout"
import SEO from "../components/seo"
import IconGrid from "../components/IconGrid"
import SocialMedia from "../components/SocialMedia"
import styled from 'styled-components'
import { about, whatElse } from '../assets/content'
import me from '../assets/images/me.png'
import { media } from '../utilities'

const SectionWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 0em;
`
const ContentWrapper = styled.div`
  
`
const TitleImage = styled.div`
  display: flex;
  & img:first-child {
    padding-right: 16px;

  }

  ${media.med`
    flex-direction: column;
    & img:first-child {
        padding-right: 0px;
        padding-bottom: 16px;
        
      }
    `
  }
`
const Image = styled.img`
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
  margin-bottom: 0px; 

`

const About = props => (
  <Layout props={props}>
    <SEO title="About Page" />
    <SectionWrapper>
      <HeroText>{about.title}</HeroText>
      <TitleImage>
        <Image src={me} />
        <div>
          {about.content.map(text => 
        	   <SubheaderText style={{fontWeight: '400', paddingBottom: fontsize.header}}>{text}</SubheaderText>
            )}
          
        </div>
      </TitleImage>
    </SectionWrapper>
    <SectionWrapper>
      <HeroText>{whatElse.title}</HeroText>
      {whatElse.content.map(text => 
         <SubheaderText style={{fontWeight: '400', paddingBottom: fontsize.header}}>{text}</SubheaderText>
        )}
    </SectionWrapper>
    <SectionWrapper>
        <HeroText>Contact</HeroText>
        <ContentWrapper>
          <SubheaderText style={{fontWeight: '400', paddingBottom: fontsize.header}}>
            I write sporadically on <a style={{color: 'black'}} target="_blank" href="https://medium.com/@BQWA">Medium</a>, push all my code to <a style={{color: 'black'}} target="_blank" href="https://github.com/BenQuartermaine">Github</a> and fluff myself up on <a style={{color: 'black'}} target="_blank" href="https://www.linkedin.com/in/benjaminquartermaine/">LinkedIn</a>.<br /><br /> For UX design projects, coffee and other enquiries, drop me an <a style={{color: 'black'}} target="_blank" href="mailto: ben.quartermaiune3@gmail.com">Email</a>.
          </SubheaderText>
        </ContentWrapper>
    </SectionWrapper>

    <SectionWrapper>
        <HeroText>Tools</HeroText>
        <ContentWrapper>
            <SubheaderText style={{fontWeight: '400', paddingBottom: fontsize.header}}>A few regular tools in the toolbelt</SubheaderText>
            <IconGrid />
        </ContentWrapper>
    </SectionWrapper>
  </Layout>
)

export default About
