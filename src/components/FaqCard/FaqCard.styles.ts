import { motion } from "framer-motion"
import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"

export const QuestionWrapper = styled.div`
	width: 100%;
	overflow: hidden;
	border-radius: 0.5rem;
	background-color: ${colors.tertiary.normal[50]};
`

export const Question = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 0 0 0.5rem 0.5rem;
	color: ${colors.black.main};
	background-color: ${colors.tertiary.normal[50]};
	font-size: clamp(0.8rem, 4vw, 1.125rem);
	line-height: 1.75rem;
	font-weight: 400;
	padding: 0.75rem 1.5rem;
	gap: 1rem;
	transition: border-radius 0.8s ease;

	@media only screen and (min-width: ${breakpoints.sm}) {
		padding: 1.5rem 3rem;
	}

	&.selected {
		background-color: ${colors.tertiary.normal[200]};
		color: ${colors.black.main};
		border-radius: 0;
	}

	&:hover,
	&.selected:hover {
		background-color: ${colors.tertiary.normal[300]};
		color: ${colors.tertiary.hover[600]};
		cursor: pointer;
	}

	&:active {
		background-color: ${colors.tertiary.active[400]};
		color: ${colors.tertiary.active[700]};
	}

	.faq-question {
		font-weight: 500;
		font-size: 1.125rem;
		line-height: 1.5;
	}

	.expand-collapse-toggle {
		display: grid;
		place-content: center;
	}
`

export const FAQAnswer = styled(motion.div)`
	overflow: hidden;

	& .faq-answer {
		color: ${colors.black.main};
		font-size: clamp(0.8rem, 4vw, 1rem);
		padding: 2rem;

		@media only screen and (min-width: ${breakpoints.lg}) {
			padding: 3rem;
		}
	}
`
