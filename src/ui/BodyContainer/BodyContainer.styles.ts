import { breakpoints } from 'shared/breakpoints'

import styled from 'styled-components'

export const StyledBodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 0 5rem;s
  }
`
