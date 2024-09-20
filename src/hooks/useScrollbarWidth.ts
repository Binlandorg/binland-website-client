import { useEffect, useRef, useState } from "react"

const useScrollbarWidth = () => {
	const [scrollbarWidth, setScrollbarWidth] = useState(0)
	const prevScrollbarWidth = useRef(0)

	useEffect(() => {
		const changeScrollbar = () => {
			const scrollDiv = document.createElement("div")
			scrollDiv.style.width = "100px"
			scrollDiv.style.height = "100px"
			scrollDiv.style.overflow = "scroll"
			scrollDiv.style.position = "absolute"
			scrollDiv.style.top = "-100px"
			document.body.appendChild(scrollDiv)
			const newScrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
			document.body.removeChild(scrollDiv)

			if (newScrollbarWidth !== prevScrollbarWidth.current) {
				prevScrollbarWidth.current = newScrollbarWidth
				setScrollbarWidth(newScrollbarWidth)
			}
		}

		changeScrollbar()

		const handleResize = () => changeScrollbar()

		window.addEventListener("resize", handleResize)

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return scrollbarWidth
}

export default useScrollbarWidth
