import styled from 'styled-components'

import { colors } from 'styles/colors'
import { breakpoints } from 'shared/breakpoints'
import Container from 'ui/Container/Container'

export const PageNotFoundWrapper = styled(Container)`
  flex-grow: 1;
  align-items: center;
  gap: 1.125rem;

  .not-found-img {
    margin-bottom: 2.5rem;
  }

  .button-not-found {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
  }
`
export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;

  .error-page-title {
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 3rem;
    text-transform: uppercase;
    color: ${colors.black.main};

    @media only screen and (min-width: ${breakpoints.lg}) {
      font-size: 3rem;
    }
  }

  .error-page-sub-title {
    color: ${colors.secondary.main};
    font-size: 1rem;
    font-weight: 600;

    @media only screen and (min-width: ${breakpoints.lg}) {
      font-size: 1.5rem;
    }
  }
`
