import React from 'react'
import { whatWeAreData } from './WhatWeAre.data'
import MisionCard from './../../Cards/MisionCard/Mision'
import styled from 'styled-components'
import { breakpoints } from 'shared/breakpoints'
import SectionAboutUs from '../SectionAboutUs/SectionAboutUs'
import Section from 'ui/Section/Section'

const WhatWeAreWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    /* flex-direction: row;
    flex-wrap: wrap; */
    gap: 6.25rem;
  }
`

const WhatWeAre: React.FC = () => {
  return (
    <SectionAboutUs title="lo que somos" titlePosition="right">
      <Section type="padding" size="lg">
        <WhatWeAreWrapper>
          {whatWeAreData.map((element) => (
            <MisionCard key={element.id} {...element} />
          ))}
        </WhatWeAreWrapper>
      </Section>
    </SectionAboutUs>
  )
}
export default WhatWeAre
//min-width: fit-content
