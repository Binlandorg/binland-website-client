import styled from "styled-components"

import bgImage from "assets/images/mockups/mockup-ui-chat.webp"
import { breakpoints } from "shared/breakpoints"
import Section from "ui/Section/Section"

export const TermsOfServiceSection = styled(Section)`
	& .container {
		gap: 2rem;

		@media only screen and (min-width: ${breakpoints.md}) {
			gap: 4rem;
		}
	}

	& main {
		@media only screen and (min-width: ${breakpoints.md}) {
			max-width: 100%;
			padding-inline: 2rem;
		}

		@media only screen and (min-width: ${breakpoints.lg}) {
			max-width: 75ch;
		}

		& article {
			& section {
				&:not(:last-child) {
					margin-bottom: 2rem;
				}

				& h3 {
					margin-bottom: 1rem;
				}
			}

			& section:first-child {
				font-size: 1.125rem;

				& p:first-child {
					margin-bottom: 1rem;
					font-weight: 600;
				}
			}
		}
	}

	& .content__wrapper {
		display: flex;

		@media only screen and (min-width: ${breakpoints.xl}) {
			gap: 4rem;
		}

		@media only screen and (min-width: ${breakpoints.lg}) {
			gap: 2rem;
		}

		@media only screen and (min-width: ${breakpoints.md}) {
			gap: 1rem;
		}
	}

	& .table-of-content {
		display: none;

		@media only screen and (min-width: ${breakpoints.md}) {
			display: inherit;
		}
	}
`

export const Hero = styled.div`
	width: 100%;
	border-radius: 0.5rem;
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0);

	& div {
		padding: 2rem;
		background-image: url(${bgImage});
		background-size: cover;
		position: relative;

		&::before {
			content: "";
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.08);
			backdrop-filter: blur(2px);
			position: absolute;
			top: 0;
			left: 0;
		}

		&::after {
			content: "";
			width: 100%;
			height: 100%;
			background-image: linear-gradient(
				45deg,
				rgba(0, 0, 0, 1) 35%,
				rgba(0, 0, 0, 0) 100%
			);
			position: absolute;
			top: 0;
			left: 0;
		}

		@media only screen and (min-width: ${breakpoints.md}) {
			padding: 5rem;
		}
	}

	& h1 {
		position: relative;
		z-index: 1;
		text-transform: uppercase;

		@media only screen and (min-width: ${breakpoints.xl}) {
			text-align: center;
		}
	}

	@media only screen and (min-width: ${breakpoints.md}) {
		border-radius: 2rem;
	}
`
