import styled from 'styled-components'

import { colors } from 'styles/colors'
import Container from 'ui/Container/Container'

export const ContainerFaq = styled(Container)`
  width: 100%;
  gap: 3rem;
`

export const FaqTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.gray[50]};
  font-size: clamp(2rem, 1.667rem + 1.481vw, 3rem);
  text-align: center;
  background: ${colors.black.main};
  width: 100%;
  height: 12.125rem;
  border-radius: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 4.5rem;
  padding: 0.625rem;
`
export const FaqQuestionsWrapper = styled(Container)`
  width: 100%;
  gap: 1rem;
  padding: 0;
`
