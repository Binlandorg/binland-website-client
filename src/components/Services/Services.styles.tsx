import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'
import Container from 'ui/Container/Container'
import Section from 'ui/Section/Section'

export const ServicesSection = styled(Section)`
  gap: 5rem;
`

export const ServicesTitle = styled.h2`
  font-size: 3rem;
  text-align: center;

  .span-point {
    color: ${colors.primary.main};
  }
`

export const CustomSingleWord = styled.b`
  color: ${colors.primary.main};
`

export const ServicesWrapper = styled(Container)`
  gap: 1.5rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 3rem;
  }
`
