import styled from "styled-components"

import { colors } from "styles/colors"
import Section from "ui/Section/Section"

export const SectionProjects = styled(Section)`
	margin: initial;
`

export const ProjectsWrapper = styled.div`
	width: 100%;
`

export const Filters = styled.div`
	margin-block: 1.5rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 0.75rem;

	@media only screen and (min-width: 1024px) {
		margin-block: 2.5rem;
	}

	@media only screen and (min-width: 1440px) {
		margin-block: 3.75rem;
	}
`

export const FilterButton = styled.button`
	border: none;
	border-radius: 3rem;
	padding: 0.25rem 0.75rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.25rem;

	&.active {
		background-color: ${colors.primary.main};
		color: ${colors.white.main};
	}

	& svg {
		width: 0.75rem;
		height: 0.75rem;

		@media only screen and (min-width: 1024px) {
			width: 1rem;
			height: 1rem;
		}
	}
`

export const ProjectsList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	list-style: none;
	margin-bottom: 1.5rem;

	@media only screen and (min-width: 1024px) {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-auto-rows: 20rem;
		gap: 1.25rem;
	}

	@media only screen and (min-width: 1440px) {
		grid-template-columns: repeat(12, 1fr);
		grid-auto-rows: 24rem;
	}
`

export const ProjectItem = styled.li`
	order: 0;
	position: relative;
	border-radius: 0.5rem;
	overflow: hidden;
	height: 9.5rem;
	width: 100%;
	cursor: pointer;

	&:hover {
		& img {
			transition: all 0.3s ease-in-out;
			transform: scale(1.4);
		}
	}

	& img {
		transition: all 0.1s ease-in-out;
	}

	@media only screen and (min-width: 1024px) {
		height: 100%;
	}

	& picture {
		width: 100%;
		height: 100%;
		display: block;

		& img {
			width: 100%;
			height: 100%;
			display: block;
			object-fit: cover;
		}
	}

	& .text {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;

		@media only screen and (min-width: 1024px) {
			padding: 1rem;
		}
	}

	&:nth-of-type(3),
	&:nth-of-type(4) {
		& .text {
			bottom: initial;
			top: 0;
		}
	}

	&:nth-of-type(1),
	&:nth-of-type(3) {
		color: ${colors.white.main};
	}

	&:nth-of-type(1) {
		& picture {
			& img {
				width: 170%;
				height: 170%;
				object-position: 0px -3rem;
			}
		}

		@media only screen and (min-width: 1024px) {
			grid-column: 1/4;
			grid-row: 1/2;

			& picture {
				& img {
					width: 100%;
					height: 100%;
					object-position: center;
				}
			}

			& .text {
				top: 0;
				bottom: initial;
			}
		}

		@media only screen and (min-width: 1440px) {
			grid-column: 1/8;
			grid-row: 1/2;
		}
	}

	&:nth-of-type(2) {
		& picture {
			& img {
				object-fit: cover;
				object-position: 0 5%;
			}
		}

		@media only screen and (min-width: 1024px) {
			grid-column: 4/7;
			grid-row: 1/2;

			& .text {
				top: 0;
				bottom: initial;
			}
		}

		@media only screen and (min-width: 1440px) {
			grid-column: 8/13;
			grid-row: 1/2;
		}
	}

	&:nth-of-type(3) {
		order: 2;

		& picture {
			& img {
				object-fit: cover;
				object-position: center;
			}
		}

		@media only screen and (min-width: 1024px) {
			grid-column: 4/7;
			grid-row: 2/3;
		}

		@media only screen and (min-width: 1440px) {
			grid-column: 6/13;
			grid-row: 2/3;
		}
	}

	&:nth-of-type(4) {
		order: 3;

		& picture {
			& img {
				object-fit: cover;
				object-position: 0 30%;
			}
		}

		@media only screen and (min-width: 1024px) {
			grid-column: 1/3;
			grid-row: 3/4;
		}

		@media only screen and (min-width: 1440px) {
			grid-column: 1 / 5;
			grid-row: 3 / 4;
		}
	}

	&.banner {
		order: 1 !important;

		@media only screen and (min-width: 1024px) {
			grid-column: 1/4;
			grid-row: 2/3;
		}

		@media only screen and (min-width: 1440px) {
			grid-column: 1/6;
			grid-row: 2/3;
		}
	}
`
