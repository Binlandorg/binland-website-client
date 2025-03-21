import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import Button from "ui/Button/Button"
import { iconStyled } from "styles/icon"

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`

export const ErrorSpan = styled.span`
	font-size: 0.75rem;
	color: ${colors.red[500]};
	margin-bottom: 0.25rem;
`

export const TitleForm = styled.h2`
	text-align: center;
	margin: 1rem 0rem;
`

export const ContainerForm = styled.div`
	padding: 1.5rem 1rem;
	background-color: ${colors.white.main};
	border-radius: 0.5rem;
	width: 100%;

	& .toast-custom {
		padding: 1rem 1.75rem;
		border-radius: 0.3125rem;
		font-size: 0.875rem;
	}

	& .toast-success {
		background-color: ${colors.success.background};
		color: ${colors.success.color};
	}

	& .toast-error {
		background-color: ${colors.error.background};
		color: ${colors.error.color};
	}

	@media only screen and (min-width: ${breakpoints.sm}) {
		padding: 2rem;
	}

	@media only screen and (min-width: ${breakpoints.lg}) {
		width: 56%;
		padding: 3rem;
	}

	@media only screen and (min-width: ${breakpoints.xxl}) {
		border-radius: 1rem;
	}
`

export const ButtonForm = styled(Button)`
	& .icon-send {
		${iconStyled}

		& path {
			fill: transparent;
		}
	}
`
