import styled from "styled-components"

export const CarrouselWrapper = styled.div``

export const CarrouselContent = styled.div`
	width: 100%;
`

export const CarrouselList = styled.ul<{ $touchDrag: boolean }>`
	list-style: none;
	display: inline-flex;
	width: 100%;
	scroll-behavior: smooth;
	overflow-x: hidden;
	${({ $touchDrag }) =>
		$touchDrag ? "touch-action: pan-y;" : "touch-action: initial;"}
	${({ $touchDrag }) =>
		$touchDrag ? "user-select: none;" : "user-select: initial;"}
`

export const CarrouselItem = styled.li<{ $transitionTime: number }>`
	width: fit-content;
	padding-right: 0.5rem;
	transition: all ${({ $transitionTime }) => $transitionTime / 1000}s ease;

	& > * {
		pointer-events: none;
	}

	&.fade-out {
		width: 0%;
		padding-right: 0;
		animation: fadeOutWidth ${({ $transitionTime }) => $transitionTime / 1000}s
			ease forwards;

		& > * {
			position: relative;
			opacity: 0;
			transform: scale(0.5);
			z-index: -1;
			animation: fadeOutContent
				${({ $transitionTime }) => ($transitionTime + 100) / 1000}s ease forwards;
		}
	}

	@keyframes fadeOutWidth {
		from {
			width: 100%;
		}
		to {
			width: 0%;
		}
	}

	@keyframes fadeOutContent {
		from {
			opacity: 1;
			transform: scale(1);
		}
		to {
			opacity: 0;
			transform: scale(0.5);
		}
	}

	&.fade-in {
		width: 0%;
		animation: fadeInWidth
			${({ $transitionTime }) => ($transitionTime * 2) / 1000}s ease forwards;

		& > * {
			position: relative;
			opacity: 0;
			transform: scale(0.5);
			z-index: -1;
			animation: fadeInContent ${({ $transitionTime }) => $transitionTime / 1000}s
				ease forwards;
		}
	}

	@keyframes fadeInWidth {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}

	@keyframes fadeInContent {
		from {
			opacity: 0;
			transform: scale(0.5);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
`

export const CarrouselButtons = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
	margin-top: 1.5rem;

	& button {
		padding: 0.5rem;
	}
`
