import styled from "styled-components"

import { Props } from "./ButtonText.types"
import { FontWeight } from "styles/typography"

export const ButtonTextWrapper = styled.p<Props>`
	font-weight: ${({ $weight = "semibold" }: Props) => FontWeight[$weight]};
	font-size: clamp(0.875rem, 0.8224rem + 0.2632vw, 1rem);
	line-height: 1.5;
`
