import { useEffect, useState } from "react"

const useHeightDifference = (
	firstRef: React.RefObject<HTMLElement>,
	secondRef: React.RefObject<HTMLElement>,
) => {
	const [diff, setDiff] = useState(0)

	useEffect(() => {
		const callback = () => {
			if (firstRef.current && secondRef.current) {
				const firstHeight = firstRef.current.offsetHeight
				const secondHeight = secondRef.current.offsetHeight
				const diffHeight = Math.abs(secondHeight - firstHeight)

				setDiff((prevDiff) => (diffHeight !== prevDiff ? diffHeight : prevDiff))
			}
		}

		callback()

		const observer = new ResizeObserver(callback)

		if (firstRef.current) observer.observe(firstRef.current)
		if (secondRef.current) observer.observe(secondRef.current)

		return () => {
			observer.disconnect()
		}
	}, [firstRef, secondRef])

	return diff
}

export default useHeightDifference
