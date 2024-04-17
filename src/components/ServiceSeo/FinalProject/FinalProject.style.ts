import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import Section from 'ui/Section/Section'
import { colors } from 'styles/colors'

export const ContainerProjectFinal = styled.div`
  background: ${colors.gray[50]};
  min-width: 100%;
`

export const SectionProjectDeliverables = styled(Section)`
  padding: 3rem 1.5rem;
  gap: 3rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    gap: 5rem;
    padding: 5rem;
  }
`

export const QuestionWrapperSeo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  text-align: center;
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 31.25rem;
    height: 14.375rem;
  }
`

export const ContentTitle = styled.h4`
  font-weight: 600;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 3rem;
  color: ${colors.secondary.disabled};
  .red-letter {
    color: ${colors.primary.main};
  }
`
export const ContentDescription = styled.p`
  font-weight: 400;
  font-size: clamp(1rem, 4vw, 1.125rem);
  line-height: 1.5rem;
  text-align: center;
  color: ${colors.secondary.main};

  @media only screen and (min-width: ${breakpoints.lg}) {
    text-align: start;
  }
`
export const WrapperProjectDeliverables = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 2rem;
  }
`

export const ProyectDeliverables = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 400;
  font-size: clamp(0.875rem, 4vw, 1rem);
  line-height: 1.312rem;
  color: #000000;

  .icon-check {
    background-color: rgba(248, 61, 72, 0.25);
    border-radius: 50%;
    color: ${colors.red[1000]};
  }
`
