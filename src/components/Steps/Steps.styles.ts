import styled from "styled-components"

import { colors } from "styles/colors"

export const StepsContainer = styled.div``

export const StepsHeader = styled.div<{
	$activeStep: number
	$disabledManual: boolean
}>`
	--step-border-width: 0.25rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	& .step {
		border-radius: 50%;
		border: var(--step-border-width) solid ${colors.secondary.normal[200]};
		width: 2.75rem;
		height: 2.75rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		transition: all 0.2s ease-in-out;
		cursor: ${({ $disabledManual }) => ($disabledManual ? "default" : "pointer")};
		pointer-events: ${({ $disabledManual }) =>
			$disabledManual ? "none" : "auto"};
		-webkit-tap-highlight-color: transparent;

		& h4 {
			font-size: 1.125rem;
			color: ${colors.secondary.normal[200]};
		}

		&.active {
			border-color: ${colors.tertiary.normal[700]};

			& h4 {
				color: ${colors.tertiary.normal[700]};
			}
		}
	}

	& .step:nth-of-type(-n + ${({ $activeStep }) => $activeStep - 1}) {
		border-color: ${colors.tertiary.normal[700]};

		& h4 {
			color: ${colors.tertiary.normal[700]};
		}
	}

	& .line:not(:last-child) {
		height: var(--step-border-width);
		flex: 1;
		background-color: ${colors.secondary.normal[200]};
		transition: all 0.2s ease-in-out;
	}

	& .line:nth-of-type(-n + ${({ $activeStep }) => $activeStep - 1}) {
		background-color: ${colors.tertiary.normal[700]};
	}
`

export const StepsContent = styled.div`
	margin-top: 2.25rem;

	& .item {
		display: none;
	}

	& .item.active {
		display: block;
	}
`
