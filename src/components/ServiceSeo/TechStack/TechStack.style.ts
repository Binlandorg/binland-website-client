import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'
import Section from 'ui/Section/Section'

export const SectionTechnologies = styled(Section)`
  margin: 1.5rem 0;
  padding: 3rem 1rem;
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

export const TechnologiesTitle = styled.h2`
  font-weight: 700;
  font-size: clamp(2rem, 1.375rem + 3.125vw, 3.375rem);
  line-height: 1.5;
`

export const TechnologiesDescription = styled.h5`
  margin: 0;
  font-weight: 400;
  font-size: clamp(1rem, 0.9432rem + 0.2841vw, 1.125rem);
  line-height: 1.5;
`
