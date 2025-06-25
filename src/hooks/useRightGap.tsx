import { useEffect, useState } from "react"

/**
 * @description Calculate the right gap between two elements
 * @param parentRef The parent element
 * @param childRef The child element
 * @returns The right gap between the two elements
 */

const useRightGap = (
	parentRef: React.RefObject<HTMLElement> | keyof HTMLElementTagNameMap,
	childRef: React.RefObject<HTMLElement> | keyof HTMLElementTagNameMap,
) => {
	const [rightGap, setRightGap] = useState(0)

	useEffect(() => {
		const parent =
			typeof parentRef === "string"
				? document.querySelector(parentRef)
				: parentRef.current
		const child =
			typeof childRef === "string"
				? document.querySelector(childRef)
				: childRef.current

		if (!child || !parent) return

		const getRightGap = () => {
			const parentRect = parent.getBoundingClientRect()
			const childRect = child.getBoundingClientRect()

			const gap = parentRect.right - childRect.right
			setRightGap(gap)
		}

		getRightGap()

		window.addEventListener("load", getRightGap)
		window.addEventListener("resize", getRightGap)
		window.addEventListener("orientationchange", getRightGap)

		return () => {
			window.removeEventListener("load", getRightGap)
			window.removeEventListener("resize", getRightGap)
			window.removeEventListener("orientationchange", getRightGap)
		}
	}, [parentRef, childRef])

	return rightGap
}

export default useRightGap
