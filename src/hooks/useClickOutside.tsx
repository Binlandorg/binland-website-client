import { useEffect, useRef } from "react"

type Elements = HTMLDivElement | HTMLInputElement

const useOutsideClick = (callback: () => void) => {
	const ref = useRef<Elements>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref?.current && !ref.current.contains(event.target as Node)) {
				callback()
			}
		}

		document.addEventListener("mousedown", handleClickOutside)

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [callback])

	return ref
}

export default useOutsideClick
