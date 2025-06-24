import styled from "styled-components"

import { FontWeight } from "styles/typography"
import { Props } from "./SubTab.types"

export const SubTabWrapper = styled.p<Props>`
	font-weight: ${({ $weight = "semibold" }: Props) => FontWeight[$weight]};
	font-size: clamp(0.625rem, 0.4145rem + 1.0526vw, 1.125rem);
	line-height: 1.5;
`
