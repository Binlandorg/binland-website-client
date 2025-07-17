import styled from "styled-components"

import { colors } from "styles/colors"
import SectionUI from "ui/Section/Section"

export const Section = styled(SectionUI)`
	margin-block: initial;

	@media only screen and (min-width: 768px) {
		margin-top: 5rem;
	}
`

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;

	@media only screen and (min-width: 768px) {
		margin-bottom: 15%;
	}

	@media only screen and (min-width: 1200px) {
		margin-bottom: 5%;
	}

	& .icon {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		padding-top: 2rem;
		display: none;

		@media only screen and (min-width: 768px) {
			display: flex;
		}
	}

	& h2 {
		text-align: center;
		background-color: ${colors.body};
		padding-inline: 1rem;
		width: fit-content;
		margin: 0 auto;
	}
`

export const WhatWeAreWrapper = styled.div`
	--width-line: 3px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.5rem;
	width: 100%;
	margin-top: 2.5rem;

	& .card:nth-of-type(1) {
		position: relative;

		&::after {
			content: "";
			position: absolute;
			top: 100%;
			left: 20%;
			width: var(--width-line);
			height: calc(1.5rem + var(--width-line) * 2);
			background-color: ${colors.primary.main};
			opacity: 0.5;
			z-index: -1;
		}
	}

	& .card:nth-of-type(2) {
		position: relative;

		&::after {
			content: "";
			position: absolute;
			top: 100%;
			right: 20%;
			width: var(--width-line);
			height: calc(1.5rem + var(--width-line) * 2);
			background-color: ${colors.primary.main};
			opacity: 0.5;
			z-index: -1;
		}
	}

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		margin-top: 3.75rem;
		margin-bottom: 3.75rem;
		gap: 1.25rem;

		& .card {
			padding: 2rem;
			padding-top: 3rem;
		}

		& .card:nth-of-type(1) {
			position: initial;

			&::after {
				display: none;
			}
		}

		& .card:nth-of-type(2) {
			position: relative;
			top: 20%;

			&::after {
				display: none;
			}
		}
	}

	@media only screen and (min-width: 1200px) {
		gap: 4.5rem;

		& .card {
			max-width: 19rem;
		}
	}
`
