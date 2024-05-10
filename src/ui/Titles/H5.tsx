import styled from 'styled-components'
import { colors } from 'styles/colors'

import { FontWeight } from 'styles/typography'
import { IH5Props } from 'types/ui/Titles'

const StyledH5 = styled.h5<IH5Props>`
  font-weight: ${(props) => props.$weight && FontWeight[props.$weight]};
  font-size: clamp(1rem, 0.875rem + 0.4vw, 1.125rem);
  line-height: 1.5;
  color: ${(props) =>
    props.color ? `${props.color}` : `${colors.black.main}`};
`

const H5: React.FC<IH5Props> = (props) => {
  return <StyledH5 {...props} />
}

export default H5
