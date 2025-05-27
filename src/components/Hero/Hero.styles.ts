import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import Section from "ui/Section/Section"

interface IHeroContent {
	$scrollbarwidth: number
}

export const HeroSection = styled(Section)`
	height: calc(100vh - var(--header-height));
`

export const HeroContent = styled.div<IHeroContent>`
	--scrollbar-width: ${({ $scrollbarwidth }) => `${$scrollbarwidth}px`};
	--fix-100vw: calc(100vw - var(--scrollbar-width));
	--spacing-x: calc((var(--fix-100vw) - 100%) / 2);

	position: relative;
	width: calc(100% + var(--spacing-x));
	left: calc(-1 * var(--spacing-x) / 2);
	display: flex;
	flex-direction: column;
	gap: 0.875rem;

	@media only screen and (min-width: ${breakpoints.full}) {
		position: static;
		width: 100%;
	}

	@media only screen and (min-width: ${breakpoints["2k"]}) {
		width: 90rem;
		height: 51.625rem;
	}

	@media only screen and (min-width: ${breakpoints["4k"]}) {
		width: 126.75rem;
		height: 78.5625rem;
	}
`

export const HeroContentWrapper = styled.div`
	background: linear-gradient(to top left, #720620 5%, #f83d48 60%);
	box-shadow: 0.625rem 0.5rem 0.625rem 0 rgba(0, 0, 0, 0.2);
	padding: 3.8rem 2rem 3.8rem 1.5rem;
	border-radius: 0rem 1rem 1rem 0rem;

	@media only screen and (min-width: ${breakpoints.md}) {
		display: grid;
		padding: 5rem 5rem 5rem 1.5rem;
		grid-template-columns: min-content auto minmax(auto, 50rem);
	}

	@media only screen and (min-width: ${breakpoints.lg}) {
		grid-template-columns: min-content auto minmax(min-content, 45%);
	}

	@media only screen and (min-width: ${breakpoints.xxl}) {
		grid-template-columns: min-content auto minmax(auto, 37rem);
	}

	@media only screen and (min-width: ${breakpoints.full}) {
		border-radius: 1rem;
	}

	@media only screen and (min-width: ${breakpoints["2k"]}) {
		height: 100%;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	z-index: 1;

	@media only screen and (min-width: ${breakpoints.md}) {
		grid-column: 3/4;
	}

	@media only screen and (min-width: ${breakpoints["2k"]}) {
		justify-content: center;
	}

	& a[href="/contact-us"] {
		display: flex;
		align-items: center;
		max-width: fit-content;
		background-color: ${colors.secondary.normal[950]};
		color: ${colors.white.main};
		border: none;
		outline: none;
		padding: 1rem 1.5rem;
		border-radius: 1rem;
		gap: 1rem;
		text-decoration: none;

		&:hover {
			background-color: ${colors.secondary.hover[900]};
		}

		&:active {
			background-color: ${colors.secondary.active[800]};
		}

		&:focus {
			outline: 2px solid ${colors.secondary.active[950]};
		}

		&:active:focus {
			outline: inherit;
		}
	}
`

export const ContentText = styled.div`
	color: ${colors.white.main};

	& h5 {
		margin-bottom: 1rem;
		word-break: break-all;
	}

	& > span {
		word-break: break-all;
	}

	& span b {
		color: ${colors.black.main};
	}

	@media only screen and (min-width: ${breakpoints.lg}) {
		& h5,
		& > span {
			word-break: normal;
		}
	}
`

export const NetworkWrapper = styled.div`
	visibility: hidden;

	& div[direction="row"] {
		display: flex;
		width: fit-content;
	}

	@media only screen and (min-width: ${breakpoints.md}) {
		display: none;
	}
`

export const NetworkWrapperInside = styled.div`
	visibility: hidden;
	display: none;
	align-items: center;

	@media only screen and (min-width: ${breakpoints.md}) {
		display: flex;
		z-index: 2;
		position: relative;
		left: -1.5rem;

		& div[direction="column"] {
			height: fit-content;
			background-color: ${colors.black.main};
		}
	}
`

export const Image = styled.div`
	position: relative;
`

export const ImageWrapper = styled.div`
	display: none;
	position: absolute;
	width: 10px;
	aspect-ratio: 1 / 1.07;

	& img {
		height: 100%;
		width: 100%;
	}

	@media only screen and (min-width: ${breakpoints.lg}) {
		display: inherit;
		width: 140%;
		bottom: -5rem;
		left: -6rem;

		${() => {
			const numberOfImages = 3
			const visibleTime = 5
			const opacityTime = 2
			const opacityIntersection = opacityTime / 2

			const timeAnimation =
				numberOfImages * (visibleTime + opacityTime + opacityIntersection)
			const delayTime = timeAnimation - visibleTime - opacityTime * 2
			const percentPerSecond = 100 / timeAnimation

			const initialDelay1 = 0
			const initialDelay2 = initialDelay1 + visibleTime + opacityIntersection
			const initialDelay3 =
				initialDelay2 + opacityTime + visibleTime + opacityIntersection

			return `
				& picture:first-child {
					opacity: 0;
					animation: fadeFirst ${timeAnimation}s ease-in-out infinite;
				}

				& picture:not(:first-child) {
					position: absolute;
					top: 0;
					right: 0;
					opacity: 0;
					animation: fade ${timeAnimation}s ease-in-out infinite;
				}

				& picture:nth-child(1) {
					animation-delay: ${initialDelay1}s;
				}

				& picture:nth-child(2) {
					animation-delay: ${initialDelay2}s;
				}

				& picture:nth-child(3) {
					animation-delay: ${initialDelay3}s;
				}

				@keyframes fadeFirst {
					0%{opacity: 1}
					${visibleTime * percentPerSecond}%{opacity: 1}
					${(visibleTime + opacityTime) * percentPerSecond}%{opacity: 0}
					${(visibleTime + opacityTime + delayTime) * percentPerSecond}%{opacity: 0}
					100%{opacity: 1}
				}

				@keyframes fade {
					0%{opacity: 0}
					${opacityTime * percentPerSecond}%{opacity: 1}
					${(visibleTime + opacityTime) * percentPerSecond}%{opacity: 1}
					${(visibleTime + opacityTime * 2) * percentPerSecond}%{opacity: 0}
					100%{opacity: 0}
				}
				`
		}}
	}

	@media only screen and (min-width: ${breakpoints.xl}) {
		width: 100%;
		left: inherit;
		right: 0;
	}

	@media only screen and (min-width: ${breakpoints.xxl}) {
		width: 37.5rem;
		top: 2rem;
		bottom: inherit;
		right: -1rem;
		max-height: 100%;

		& img {
			filter: drop-shadow(0.75rem 0 0.25rem rgba(0, 0, 0, 0.1));
			-webkit-mask-image: linear-gradient(to top, transparent 1%, black 7%);
			mask-image: linear-gradient(to top, transparent 1%, black 7%);
		}
	}

	@media only screen and (min-width: ${breakpoints["2k"]}) {
		width: 58.375rem;
	}

	@media only screen and (min-width: ${breakpoints["4k"]}) {
		width: 92.75rem;
	}
`
