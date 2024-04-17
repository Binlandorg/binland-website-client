import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  font-weight: bold;
  font-size: clamp(2rem, 0.625rem + 4.4vw, 3.375rem);
  line-height: 1.5;
`

const H2: React.FC<PropsWithChildren> = ({children}) => {
  return <StyledH2>{children}</StyledH2>
}

export default H2
