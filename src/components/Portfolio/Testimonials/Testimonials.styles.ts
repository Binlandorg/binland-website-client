import styled from "styled-components"
import { colors } from "styles/colors"
import Section from "ui/Section/Section"

export const SectionTestimonials = styled(Section)`
	margin: initial;
`

export const TestimonialsWrapper = styled.div`
	margin-bottom: 5rem;
	width: 100%;

	& h2 {
		margin-bottom: 0.75rem;
		text-transform: uppercase;

		&::after {
			content: "";
			display: block;
			width: 12.5rem;
			height: 0.25rem;
			background-color: ${colors.primary.main};
		}
	}

	@media only screen and (min-width: 1024px) {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 12px;

		& h2 {
			grid-column: 1 / 4;
		}
	}
`

export const TestimonialsContent = styled.div<{ $rightGap: number }>`
	width: 100%;
	position: relative;

	& .carrousel {
		position: relative;
		left: -1.5rem;
		width: calc(100% + ${({ $rightGap }) => $rightGap * 2}px);
	}

	& .carrousel-list {
		padding-inline: 1.5rem;
	}

	& .carrousel-buttons {
		padding-inline: 1.5rem;
	}

	@media only screen and (min-width: 1024px) {
		grid-column: 4 / 7;

		& .carrousel {
			left: initial;
			width: calc(100% + ${({ $rightGap }) => $rightGap}px);
		}

		& .carrousel-list,
		& .carrousel-buttons {
			padding-inline: initial;
		}
	}
`

export const TestimonialCard = styled.div`
	background-color: ${colors.white.main};
	border-radius: 0.5rem;
	padding: 1.5rem;
	width: 17rem;

	@media only screen and (min-width: 1024px) {
		width: 25.75rem;
	}

	& .top {
		margin-bottom: 0.75rem;

		& .client {
			display: flex;
			align-items: center;
			gap: 0.75rem;

			& picture {
				width: 3rem;
				height: 3rem;
				border-radius: 50%;
				overflow: hidden;
				display: block;

				& img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					display: block;
				}
			}

			& .info {
				& .position {
					display: flex;
					gap: 0.375rem;
				}
			}
		}
	}
`
