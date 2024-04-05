import styled from 'styled-components'

import { IH3Props } from 'types/ui/Titles'

const StyledH3 = styled.h3<IH3Props>`
  font-weight: ${(props) => props.weight};
  font-size: clamp(1.5rem, 1rem + 1.6vw, 2rem);
  line-height: 1.5;
`

const H3: React.FC<IH3Props> = (props) => {
  return <StyledH3 {...props}/>
}

export default H3
