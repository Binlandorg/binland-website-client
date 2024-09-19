import styled from 'styled-components'

import { colors } from 'styles/colors'
import { breakpoints } from 'shared/breakpoints'
import Container from 'ui/Container/Container'
import { FontWeight } from 'styles/typography'

export const StyledPageNotFound = styled(Container)`
  flex-grow: 1;
  align-items: center;
  gap: 3rem;
  min-height: calc(100dvh - var(--header-height));

  .not-found-img {
    aspect-ratio: 348 / 209;
    width: 100%;
    height: 100%;
  }

  .button-not-found {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
  }

  & button[type='secondary']:hover {
    background-color: ${colors.secondary.hover[300]};
  }

  & button[type='secondary']:active {
    background-color: ${colors.secondary.active[900]};
    color: ${colors.white.main};
  }

  & a:focus {
    outline-color: ${colors.secondary.normal[800]};
    border-radius: 0.65rem;
  }

  & a:focus-visible {
    outline-offset: inherit;
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