import styled from "styled-components";

import { breakpoints } from "shared/breakpoints";
import { colors } from "styles/colors";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    padding-block: 2.5rem;
	gap: 2.5rem;
    max-width: 46.75rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
        padding-block: 5.75rem;
        gap: 3.75rem;
    }

    @media only screen and (min-width: ${breakpoints.xxl}) {
        padding-block: 5.5rem 8.5rem;
    }
`

export const Image = styled.img`
    width: 100%;
	max-width: 46rem;
`

export const Bottom = styled.div`
	text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
        gap: 2.25rem;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
        gap: 1.5rem;
    }
`

export const CtaContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const ColorText = styled.span`
    color: ${colors.tertiary.active[900]};
`