import styled from 'styled-components'

import { IDisplayProps } from 'types/ui/Display'

const sizeStyles = (size: string) => {
  switch (size) {
    case 'sm':
      return `
        font-size: clamp(1.25rem, 0.904rem + 1.538vw, 2.25rem);
      `
    case 'md':
      return `
        font-size: clamp(2.25rem, 1.99rem + 1.154vw, 3rem);
      `
    case 'lg':
      return `
        font-size: clamp(2.5rem, 1.851rem + 2.885vw, 4.375rem);
      `
    default:
      break
  }
}

export const StyledDisplay = styled.span<IDisplayProps>`
  ${(props) => sizeStyles(props.size)}
  font-weight: 700;
  ${(props) => (props.fontStyle ? `font-style: ${props.fontStyle}` : 'normal')};
  line-height: 1.5;
`
