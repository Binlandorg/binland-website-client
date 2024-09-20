import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import Section from "ui/Section/Section"

export const SectionTechnologies = styled(Section)`
  gap: 3rem;

  @media screen and (min-width: ${breakpoints.lg}) {
    gap: 5rem;
  }
`

export const WrapperTechnologiesTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  color: ${colors.secondary.main};

  @media screen and (min-width: ${breakpoints.lg}) {
    gap: 3rem;
  }
`

export const WrapperTechnologies = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const Tech = styled.div``

export const TechnologiesTitle = styled.p`
  font-weight: 600;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 3rem;
  .text-red {
    color: red;
  }
`

export const TechnologiesDescription = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`
