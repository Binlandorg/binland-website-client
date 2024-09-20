import styled from "styled-components"

import { colors } from "styles/colors"
import { FontWeight } from "styles/typography"
import type { IH3Props } from "types/ui/Titles"

const StyledH3 = styled.h3<IH3Props>`
  font-weight: ${(props) => FontWeight[props.$weight]};
  font-size: clamp(1.5rem, 1rem + 1.6vw, 2rem);
  line-height: 1.5;
  color: ${(props) =>
		props.color ? `${props.color}` : `${colors.secondary.main}`};
`

const H3: React.FC<IH3Props> = (props) => {
	return <StyledH3 {...props} />
}

export default H3
