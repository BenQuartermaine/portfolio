import React from 'react'
import styled from 'styled-components'

const BkgImg = styled.div`
 background-image: url(${props => props.imageOne});
 height: 400px;
 width: 400px;

`;


const CaseStudyCard = ({ project }) => {
  const {title, description, imageOne, date} = project

  return (
    <div>
      <BkgImg>
        div
        <img src={imageOne} alt=""/>
      </BkgImg>
      
    </div>
  )
}

export default CaseStudyCard
