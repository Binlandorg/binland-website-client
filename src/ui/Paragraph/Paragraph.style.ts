import styled from "styled-components"
import { FontWeight } from "styles/typography"

import { IParagraph } from "types/ui/Paragraph"

export const StyledParagraph = styled.p<IParagraph>`
  font-weight: ${({ $weight }) => FontWeight[$weight]};
  font-size: clamp(0.75rem, 0.571rem + 0.476vw, 1rem);
  font-style: ${({ $style }) => $style};
  line-height: 1.5;
`