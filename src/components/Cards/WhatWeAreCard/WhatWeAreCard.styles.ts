import styled from "styled-components"

import { colors } from "styles/colors"

export const CardWrapper = styled.div`
	--bg-color: ${colors.body};
	--main-color: ${colors.primary.main};
	--white-color: ${colors.white.main};

	display: flex;
	padding: 2rem 1rem;
	flex-direction: column;
	align-items: center;
	border-radius: 2rem;
	background-color: ${colors.secondary[100]};
	width: 100%;
	gap: 1.5rem;
	background:
		linear-gradient(var(--bg-color), var(--bg-color)) padding-box,
		linear-gradient(130deg, var(--white-color), var(--main-color)) border-box;
	border: 3px solid transparent;

	& .info-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		& h4 {
			text-align: center;
			color: var(--main-color);
		}

		& .info-description {
			text-align: center;
		}
	}
`
