import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'

export const ContentWrapper = styled.div`
  padding: 1rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 2rem;
  }

  @media only screen and (min-width: ${breakpoints.xl}) {
    padding: 3rem;
  }
`
