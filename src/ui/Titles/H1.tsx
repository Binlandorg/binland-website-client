import styled from 'styled-components'

import { IH1Props } from 'types/ui/Titles'
import { colors } from 'styles/colors'

const StyledH1 = styled.h1`
  font-weight: bold;
  font-size: clamp(2rem, -1rem + 9.6vw, 5rem);
  line-height: 1.5;
  color: ${(props) =>
    props.color ? `${props.color}` : `${colors.black.main}`};
`

const H1: React.FC<IH1Props> = (props) => {
  return <StyledH1 {...props} />
}

export default H1
