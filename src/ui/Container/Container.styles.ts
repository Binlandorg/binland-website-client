import styled from 'styled-components'

import { IStyledContainer } from 'types/ui/Container'

const sizeStyles = (size: string) => {
  switch (size) {
    case 'sm':
      return `
        max-width: 640px;
      `
    case 'md':
      return `
          max-width: 768px;
        `
    case 'lg':
      return `
        max-width: 1024px;
      `
    case 'xl':
      return `
        max-width: 1280px;
      `
    default:
      break
  }
}

export const StyledContainer = styled.div<IStyledContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: auto;
  flex-direction: column;
  width: ${({ $isfullwidth }) => ($isfullwidth ? '100%' : '')};

  ${(props) => sizeStyles(props.size)}
`
