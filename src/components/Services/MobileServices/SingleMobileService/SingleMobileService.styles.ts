import styled from 'styled-components'

import { colors } from 'styles/colors'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MacroService = styled.div`
  width: fit-content;
  background: ${colors.white.main};
  color: ${colors.primary.main};
  padding: 1rem;
  border-radius: 0.625rem;
  font-weight: bold;
`

export const MacroServiceContent = styled.div`
  background: ${colors.white.main};
  padding: 1rem;
  border-radius: 1rem;
`
