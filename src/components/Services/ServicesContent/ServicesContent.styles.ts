import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import { iconStyled } from "styles/icon"

export const ServiceContentWrapper = styled.div`
	display: flex;
	gap: 2rem;
	flex-direction: column;

	@media only screen and (min-width: ${breakpoints.xl}) {
		flex-direction: row;
	}

	& .left-content {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 100%;

		@media only screen and (min-width: ${breakpoints.xl}) {
			flex: 1 1 25.5rem;
		}

		& .what-is {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			color: ${colors.secondary.normal[800]};
		}

		& .what-includes {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			& .includes-wrapper {
				display: flex;
				flex-wrap: wrap;
				list-style: none;
				gap: 1rem;

				& > li {
					display: flex;
					align-items: center;
					gap: 0.5rem;

					& .icon-star {
						${iconStyled}
					}
				}
			}
		}
	}

	& .right-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 1.5rem;

		@media only screen and (min-width: ${breakpoints.lg}) {
			justify-content: space-between;
			align-items: flex-end;
		}

		@media only screen and (min-width: ${breakpoints.xl}) {
			flex: 1 1 13rem;
		}

		& .see-more__link {
			& .icon-external-link {
				${iconStyled}
			}
		}

		& .service__img {
			object-fit: cover;
			max-width: 17.5rem;
			width: 100%;
			height: auto;
			display: none;

			@media only screen and (min-width: ${breakpoints.xl}) {
				margin-top: 3.75rem;
				margin-bottom: 3.75rem;
				display: block;
			}
		}
	}
`
