import styled from 'styled-components'

import { FontWeight } from 'styles/typography'
import { IH4Props } from 'types/ui/Titles'
import { colors } from 'styles/colors'

const StyledH4 = styled.h4<IH4Props>`
  font-weight: ${(props) => FontWeight[props.$weight]};
  font-size: clamp(1.125rem, 0.75rem + 1.2vw, 1.5rem);
  line-height: 1.5;
  color: ${(props) =>
    props.color ? `${props.color}` : `${colors.secondary.main}`};
`

const H4: React.FC<IH4Props> = (props) => {
  return <StyledH4 {...props} />
}

export default H4
