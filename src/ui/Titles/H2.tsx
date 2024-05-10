import styled from 'styled-components'
import { colors } from 'styles/colors'

import { IH2Props } from 'types/ui/Titles'

const StyledH2 = styled.h2`
  font-weight: bold;
  font-size: clamp(2rem, 0.625rem + 4.4vw, 3.375rem);
  line-height: 1.5;

  .span-point {
    color: ${colors.primary.main};
  }
`

const H2: React.FC<IH2Props> = (props) => {
  return (
    <StyledH2>
      {props.children}
      {props.$withDot && <span className="span-point">.</span>}
    </StyledH2>
  )
}

export default H2
