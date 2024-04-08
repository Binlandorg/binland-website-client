import styled from "styled-components"

import { IH5Props } from "types/ui/Titles"

const StyledH5 = styled.h4<IH5Props>`
  font-weight: ${(props) => props.weight};
  font-size: clamp(1rem, 0.875rem + 0.4vw, 1.125rem);
  line-height: 1.5;
`

const H5: React.FC<IH5Props> = (props) => {
  return <StyledH5 {...props} />
}

export default H5
