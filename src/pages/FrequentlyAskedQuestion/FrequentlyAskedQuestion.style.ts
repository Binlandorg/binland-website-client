import styled from 'styled-components'

import { colors } from 'styles/colors'
import Container from 'ui/Container/Container'
import Section from 'ui/Section/Section'
import { breakpoints } from 'shared/breakpoints'

export const ContainerFaq = styled(Container)`
  width: 100%;
  gap: 3rem;
`

export const TitleWrapper = styled.div`
  background: ${colors.black.main};
  width: 100%;
  border-radius: 1rem;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 3.5rem 0.5rem;
  }

  & > h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: clamp(2rem, 1.667rem + 3.481vw, 4rem);
  }
`

export const FaqQuestionsWrapper = styled(Container)`
  width: 100%;
  gap: 1rem;
  padding: 0;
`

export const SectionFAQ = styled(Section)`
  max-width: 100%;
`
