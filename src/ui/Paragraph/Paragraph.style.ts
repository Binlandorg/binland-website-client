import styled, { css } from "styled-components"

import { FontWeight } from "styles/typography"
import type { IParagraph } from "types/ui/Paragraph"

const getFontsize = (fontsize: number) => {
	switch (fontsize) {
		case 12:
			return css`
      font-size: clamp(0.625rem, 0.5833rem + 0.2083vw, 0.75rem);
      `
		case 14:
			return css`
      font-size: clamp(0.75rem, 0.7083rem + 0.2083vw, 0.875rem);
      `
		case 16:
			return css`
      font-size: clamp(0.875rem, 0.8333rem + 0.2083vw, 1rem);
      `
	}
}

export const StyledParagraph = styled.p<IParagraph>`
  font-weight: ${({ $weight = "regular" }) => FontWeight[$weight]};
  ${({ $fontsize = 16 }) => getFontsize($fontsize)}
  font-style: ${({ $style = "regular" }) => $style};
  line-height: 1.5;
`
