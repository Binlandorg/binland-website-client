import { breakpoints } from "shared/breakpoints"
import styled from "styled-components"
import { colors } from "styles/colors"

export const TableOfContentStyled = styled.nav`
	max-width: fit-content;
	min-width: max-content;
	position: sticky;
	top: calc(var(--header-height) + 1.5rem);

	& h5 {
		padding: 0rem 1.5rem 1.5rem 1.5rem;
	}

	& ul {
		background-color: ${colors.white.main};
		border-radius: 0.5rem;

		& li {
			list-style: none;

			& a {
				padding: 1rem 1.5rem 1rem 2rem;
				font-weight: 600;
				text-decoration: none;
				color: ${colors.black.main};
				display: block;

				@media only screen and (max-width: ${breakpoints.xl}) {
					padding: 1rem 1.5rem;
				}
			}
		}
	}

	& li:not(:last-child) {
		border-bottom: 0.125rem solid ${colors.tertiary.normal[50]};
	}

	& li {
		& a {
			&.active {
				color: ${colors.primary.normal[500]};
			}

			&:active {
				color: ${colors.primary.normal[500]};
			}

			&:hover {
				color: ${colors.primary.hover[700]};
			}

			&:focus-visible {
				outline: 0.125rem solid ${colors.primary.focus[500]};
				outline-offset: 0.0625rem;
				border-radius: 0.25rem;
			}
		}
	}
`
