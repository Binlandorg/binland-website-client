import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import SectionAboutUs from "../SectionAboutUs/SectionAboutUs"

export const StyledFoundersSection = styled(SectionAboutUs)``
export const FoundersContent = styled.div`
	width: 100%;
	padding: 3rem 0rem;
`

export const FoundersList = styled.ul`
	width: 100%;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 3rem;

	@media only screen and (min-width: ${breakpoints.xxl}) {
		padding: 5rem 0rem;
	}
`
export const FoundersItem = styled.li``
