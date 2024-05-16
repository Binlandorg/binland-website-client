import styled from 'styled-components'

import { colors } from 'styles/colors'
import { breakpoints } from 'shared/breakpoints'
import Container from 'ui/Container/Container'
import { FontWeight } from 'styles/typography'

export const StyledPageNotFound = styled(Container)`
  flex-grow: 1;
  align-items: center;
  gap: 3rem;
  height: calc(100vh - 4.5rem);

  .not-found-img {
    width: 100%;
  }

  .button-not-found {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
  }

  & button[type='secondary']:hover {
    background-color: ${colors.secondary.hover[300]};
  }

  & button[type='secondary'] > p {
    font-weight: ${FontWeight.semibold};
  }
`
export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;

  .error-page-title {
    text-transform: uppercase;
    color: ${colors.black.main};
  }
`
export const ImageWrapper = styled.div`
  max-width: 43.5rem;
  width: 100%;

  @media only screen and (max-width: ${breakpoints.xs}){
    width: 17.5rem;
  }
`