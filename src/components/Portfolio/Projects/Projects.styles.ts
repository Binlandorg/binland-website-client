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

    @media only screen and (min-width: 1024px) {
        height: 100%;
    }

	& .thumbnail-wrapper {
		height: 100%;
		width: 100%;

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

	}

    & video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

	& .text {
        pointer-events: none;
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

    &:not(.banner):hover{
        aspect-ratio: 16 / 9;
    }

	&:nth-of-type(1),
	&:nth-of-type(3) {
		color: ${colors.white.main};

        & .name{
            color: ${colors.white.main};
        }
	}

	&:nth-of-type(1) {

        & .text{
            bottom: 0;
        }

        & img{
            object-position: 0px 20%;
        }

		@media only screen and (min-width: 1024px) {
			grid-column: 1 / 4;
			grid-row: 3 / 4;

            & .text{
            top: 0;
        }
		}

		@media only screen and (min-width: 1440px) {
			grid-column: 1 / 8;
			grid-row: 3 / 4;
		}
	}

	&:nth-of-type(2) {
        & .text{
            bottom: 0;

            
        }

            & img{
                object-position: 0px 20%;
            }

		@media only screen and (min-width: 1024px) {
            & .text{
            top: 0;

            & .description{
                max-width: min-content;
            }
        }

			grid-column: 4/7;
			grid-row: 1/2;
		}

		@media only screen and (min-width: 1440px) {
			grid-column: 8/13;
			grid-row: 1/2;
		}
	}

	&:nth-of-type(3) {
		order: 2;

        & .text{
            top: 0;
        }

            & img{
                object-position: 0px 30%;
            }

		@media only screen and (min-width: 1024px) {
			grid-column: 1 / 4;
			grid-row: 1 / 2;
		}

		@media only screen and (min-width: 1440px) {
			grid-column: 1 / 8;
			grid-row: 1 / 2;
		}
	}

	&:nth-of-type(4) {
		order: 2;

        & .text{
            top: 0;
        }

            & img{
                object-position: 0px 20%;
            }

		@media only screen and (min-width: 1024px) {
			grid-column: 4 / 7;
			grid-row: 2 / 3;
		}

		@media only screen and (min-width: 1440px) {
			grid-column: 6 / 13;
			grid-row: 2 / 3;
		}
	}

    &:nth-of-type(5) {    
        order: 2;

        & .text{
            top: 0;
        }

        & img {
				object-fit: cover;
				object-position: 0% 0%;
			}

        @media only screen and (min-width: 1024px) {
			grid-column: 4 / 7;
			grid-row: 3 / 4;

            & .text{
                & .name{
                    max-width: 70%;
                }
            }
		}

        @media only screen and (min-width: 1440px) {
            grid-column: 8 / 13;
            grid-row: 3 / 4;
        }        
    }

	&.banner {
		order: 1;

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
