import styled from "styled-components"

import { colors } from "styles/colors"
import { FontWeight } from "styles/typography"
import Section from "ui/Section/Section"
import Container from "ui/Container/Container"

export const InfoSection = styled(Section)`
	margin-block: initial;
`

export const InfoContainer = styled(Container)`
	margin-block: initial;
`

export const Wrapper = styled.div`
	@media only screen and (min-width: 900px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto 1fr;
		gap: 2rem 1rem;
	}
`

export const QuoteContainer = styled.div`
	display: flex;
	flex-direction: column;

	& .quote-text {
		font-weight: ${FontWeight.normal};
	}

	& .quote-icon {
		width: 2rem;

		& path {
			fill: ${colors.secondary.disabled[300]};
		}

		&:last-child {
			align-self: end;
		}
	}
`

export const Image = styled.img`
	border-radius: 0.5rem;
	margin-top: 1.5rem;
	margin-bottom: 0.75rem;
	width: 100%;

	@media only screen and (min-width: 900px) {
		width: 100%;
		object-fit: cover;
		grid-column: 1 / 2;
		grid-row: 2 / 3;
		aspect-ratio: 1 / 1;
		border-radius: 1rem;
		margin-top: initial;
		margin-bottom: initial;
	}

	@media only screen and (min-width: 1200px) {
		aspect-ratio: 3 / 1;
		object-position: 0px 0px;
	}
`

export const HistoryContainer = styled.div`
	background-color: ${colors.tertiary.active[900]};
	padding: 1.5rem;
	border-radius: 0.5rem;
	color: ${colors.white.main};

	@media only screen and (min-width: 900px) {
		grid-column: 2 / 3;
		grid-row: 1 / 3;
		border-radius: 1rem;
	}

	& .history-title {
		color: ${colors.primary.main};
		text-align: center;
		margin-bottom: 1rem;

		@media only screen and (min-width: 900px) {
			text-align: right;
		}
	}
`

export const HistoryText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`
