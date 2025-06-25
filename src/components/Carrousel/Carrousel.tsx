import { useEffect, useMemo, useRef } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

import Button from "ui/Button/Button"
import { CarrouselButtons, CarrouselContent } from "./Carrousel.styles"
import { CarrouselItem, CarrouselList } from "./Carrousel.styles"
import { CarrouselWrapper } from "./Carrousel.styles"
import type { ConfigType } from "./Carrousel.types"

const configDefault: Required<ConfigType> = {
	speed: 0.5,
	transitionTime: 300,
	mouseDrag: true,
	touchDrag: true,
	buttons: true,
}

type Props = {
	items: React.ReactNode[]
	configProp?: ConfigType
}

const Carrousel: React.FC<Props> = ({ items, configProp }) => {
	const containerRef = useRef<HTMLUListElement>(null)
	const startXRef = useRef<number | null>(null)

	const config = useMemo(() => {
		return {
			...configDefault,
			...configProp,
		}
	}, [configProp])

	useEffect(() => {
		const container = containerRef.current
		if (!container || !config.mouseDrag) return

		const handlePointerDown = (e: PointerEvent) => {
			startXRef.current = e.clientX
		}

		const handlePointerUp = (e: PointerEvent) => {
			if (!startXRef.current) return

			const currentX = e.clientX
			const diffX = currentX - startXRef.current
			const threshold = 50

			if (diffX < -threshold) {
				handleNext()
				return
			}

			if (diffX > threshold) {
				handleBack()
				return
			}

			startXRef.current = null
		}

		container.addEventListener("pointerdown", handlePointerDown)
		container.addEventListener("pointerup", handlePointerUp)

		return () => {
			container.removeEventListener("pointerdown", handlePointerDown)
			container.removeEventListener("pointerup", handlePointerUp)
		}
	}, [config.mouseDrag])

	const handleNext = () => {
		const container = containerRef.current
		if (!container) return

		const firstChild = container.children[0] as HTMLElement
		firstChild.classList.add("fade-out")

		setTimeout(() => {
			container.appendChild(firstChild)
			firstChild.classList.remove("fade-out")
		}, config.transitionTime)
	}

	const handleBack = () => {
		const container = containerRef.current
		if (!container) return

		const lastChild = container.children[
			container.children.length - 1
		] as HTMLElement
		container.prepend(lastChild)
		lastChild.classList.add("fade-in")

		setTimeout(() => {
			lastChild.classList.remove("fade-in")
		}, config.transitionTime + 100)
	}

	return (
		<CarrouselWrapper className="carrousel">
			<CarrouselContent>
				<CarrouselList
					ref={containerRef}
					className="carrousel-list"
					$touchDrag={config.touchDrag}
				>
					{items.map((item, index) => (
						<CarrouselItem
							$transitionTime={config.transitionTime}
							key={`item-${index.toString()}`}
						>
							{item}
						</CarrouselItem>
					))}
				</CarrouselList>
			</CarrouselContent>
			{config.buttons && (
				<CarrouselButtons className="carrousel-buttons">
					<Button $variant="secondary" $style="text" onClick={handleBack}>
						<IoIosArrowBack size={24} />
					</Button>
					<Button $variant="secondary" $style="text" onClick={handleNext}>
						<IoIosArrowForward size={24} />
					</Button>
				</CarrouselButtons>
			)}
		</CarrouselWrapper>
	)
}

export default Carrousel
