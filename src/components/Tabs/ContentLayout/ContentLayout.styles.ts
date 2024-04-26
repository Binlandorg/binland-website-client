import styled from 'styled-components'

import Button from 'ui/Button/Button'

export const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SeeMoreButton = styled(Button)`
  width: fit-content;
  margin-left: auto;
  /** TODO: remove this style when see more button will be functional */
  display: none;
`
