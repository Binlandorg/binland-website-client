import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"

export const MobileServicesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4rem;
	width: 100%;

	@media only screen and (min-width: ${breakpoints.md}) {
		display: none;
	}
`
