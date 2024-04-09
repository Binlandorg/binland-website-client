import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'
import { Link } from 'react-router-dom'
import Container from 'ui/Container/Container'

export const ContainerServices = styled(Container)`
  gap: 3rem;

  @media only screen and (min-width: ${breakpoints.md}) {
    gap: 5.5rem;
  }
`
interface ServiceContentWrapperProps {
  index: number
}

export const ServiceContentWrapper = styled.div<ServiceContentWrapperProps>`
  display: flex;
  gap: 1rem;
  align-items: center;
  ${({ index }) =>
    (index + 1) % 2 === 0
      ? 'flex-direction: column-reverse'
      : 'flex-direction: column'};

  @media only screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    padding: 2rem 0;
    gap: 3.125rem;
  }
`

export const ServiceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.md}) {
    max-width: 31.25rem;
  }

  .service__description {
    font-size: 1rem;
    line-height: 1.5;
    color: ${colors.black.main};
  }
`

export const ServiceLinksWrapper = styled.div`
  min-height: 11rem;
  background-color: ${colors.white.main};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem 2rem;
  row-gap: 1rem;
  column-gap: 2.625rem;

  @media only screen and (min-width: ${breakpoints.md}) {
    max-width: 29rem;
  }
`

export const ServiceLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.tertiary.normal[700]};
  text-decoration: none;
  font-size: 1.125rem;
  line-height: 1.6875;
  font-weight: 700;

  &:hover {
    color: ${colors.tertiary.hover[600]};
  }
`
