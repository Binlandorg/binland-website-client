import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import Section from "ui/Section/Section"

export const ComplaintsBookSection = styled(Section)`
	text-align: center;

	@media only screen and (min-width: ${breakpoints.lg}) {
		margin: 3.75rem auto;
	}

	@media only screen and (min-width: ${breakpoints.xxl}) {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		align-items: flex-start;
		gap: 1.25rem;
	}
`

export const ComplaintsBookDetails = styled.div`
	width: 100%;

	& > h2 {
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 0.75rem;
	}

	& .description {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		& h4 {
			color: ${colors.tertiary.active[900]};
		}
	}

	@media only screen and (min-width: ${breakpoints.xxl}) {
		grid-column: 1/6;

		& > h2 {
			text-align: left;
			margin-bottom: 1.5rem;
		}

		& .description {
			& h4 {
				text-align: left;
			}
		}
	}
`

export const ComplaintsBookFormWrapper = styled.div`
	width: 100%;
	margin-top: 1.5rem;

	@media only screen and (min-width: ${breakpoints.xxl}) {
		margin-top: initial;
		grid-column: 6/13;
	}
`

export const Info = styled.div`
	background-color: ${colors.black.main};
	width: 100%;
	border-radius: 0.5rem;
	margin-top: 1.5rem;
	padding: 1.125rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	@media only screen and (min-width: ${breakpoints.lg}) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 1.5rem;
		gap: 1.5rem;
		margin-top: 2.25rem;
	}

	@media only screen and (min-width: ${breakpoints.xxl}) {
		display: flex;
	}

	& * {
		color: ${colors.white.main};
		text-align: left !important;
	}
`
export const Confirm = styled(Section)`
	margin-block: 3.5rem;
	text-align: center;

	@media only screen and (min-width: ${breakpoints.lg}) {
		margin-block: 6.25rem;
	}

	@media only screen and (min-width: ${breakpoints.xxl}) {
		margin-block: 7rem;
	}
`
export const ConfirmRegisterNumber = styled.div`
	& h5 {
		color: ${colors.primary.main};
	}
`
export const ConfirmTitle = styled.div`
	margin-top: 0.75rem;

	& h2 {
		color: ${colors.tertiary.active[900]};
	}
`
export const ConfirmDescription = styled.div`
	margin-top: 1.5rem;

	& h5 {
		color: ${colors.black.main};
	}
`
