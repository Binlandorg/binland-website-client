import styled from 'styled-components'
import { TbExternalLink } from 'react-icons/tb'

import Container from 'ui/Container/Container'
import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'

export const CardsWrapper = styled(Container)`
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin: 0;
  gap: 1rem;
  padding: 0;
`

export const ExternalLink = styled(TbExternalLink)`
  color: ${colors.white.main};

  &:hover {
    color: ${colors.secondary.normal[300]};
  }
`

export const CardWrapper = styled.div`
  background-color: ${colors.white.main};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 25rem;
  height: fit-content;
  gap: 0.75rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    height: 24.875;
  }

  .img-wrapper {
    position: relative;

    &:hover .external-link {
      opacity: 1;
    }

    &:hover .img-card {
      filter: blur(0.1rem) brightness(70%);
    }
  }

  .img-card {
    border-radius: 0.5rem;
    height: auto;
    width: 100%;
    object-fit: cover;
    transition: 0.5s ease;
    backface-visibility: hidden;

    @media only screen and (min-width: ${breakpoints.xs}) {
      min-height: 12.5rem;
    }

    @media only screen and (min-width: ${breakpoints.sm}) {
      min-height: 16.25rem;
    }
  }

  .external-link {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    &:hover {
      opacity: 1;
    }
  }

  .client-name {
    color: ${colors.secondary.disabled};
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
      font-size: 1.5rem;
      line-height: 2.25rem;
    }
  }

  .client-description {
    color: ${colors.black.main};
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.125rem;
  }
`
