import { PropsWithChildren } from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  font-weight: bold;
  font-size: clamp(2rem, -1rem + 9.6vw, 5rem);
  line-height: 1.5;
`

const H1: React.FC<PropsWithChildren> = ({children}) => {
  return <StyledH1>{children}</StyledH1>
}

export default H1
