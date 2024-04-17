import styled from 'styled-components'

import { colors } from 'styles/colors'
import { breakpoints } from 'shared/breakpoints'

export const WrapperContactUsInformation = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  background-color: ${colors.black.main};
  border-radius: 1rem;
  justify-content: space-evenly;
  padding: 1.5rem;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.sm}) {
    padding: 2rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 40%;
    padding: 3rem;
  }
`
