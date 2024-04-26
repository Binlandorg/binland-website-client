import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'

export const ContainerTitle = styled.div`
  max-width: 100%;
  min-width: 100%;
  display: flex;
  gap: 1.875rem;
`

export const ContainerLine = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

export const Line = styled.div`
  width: 100%;
  height: 0.125rem;
  border-radius: 1rem;
  background-color: ${colors.secondary.main};

  &::after {
    content: '';
    position: absolute;
    width: calc(50vw - ${breakpoints.xs} / 2 + 1rem);
    height: 0.125rem;
    border-radius: 1rem;
    background-color: ${colors.secondary.main};
    right: 0;

    @media only screen and (min-width: ${breakpoints.md}) {
      width: calc(50vw - ${breakpoints.md} / 2 + 1rem);
    }

    @media only screen and (min-width: ${breakpoints.sm}) {
      width: calc(50vw - ${breakpoints.sm} / 2 + 1rem);
    }

    @media only screen and (min-width: ${breakpoints.lg}) {
      width: calc(50vw - ${breakpoints.lg} / 2 + 1rem);
    }
  }
`

export const Text = styled.div`
  display: inline;
  font-size: clamp(1.5rem, 4vw, 3.375rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  color: ${colors.secondary.main};

  .founder-point {
    color: ${colors.black.main};
  }
`
