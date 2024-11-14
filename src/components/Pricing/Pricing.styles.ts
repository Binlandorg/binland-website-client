import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"

const PricingContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& > h2,
	& > p {
		text-align: center;
	}

	& .description {
		max-width: 75ch;
		margin-inline: auto;
	}

	& .packages {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		list-style: none;

		@media only screen and (min-width: ${breakpoints.sm}) {
			margin-top: 2rem;
		}

		@media only screen and (min-width: ${breakpoints.lg}) {
			align-items: center;
		}
	}
`

export default PricingContainer
