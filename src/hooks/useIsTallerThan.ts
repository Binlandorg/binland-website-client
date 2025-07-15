import { useEffect, useState } from "react"

const useIsTallerThan = (
	targetRef: React.RefObject<HTMLElement>,
	referenceRef: React.RefObject<HTMLElement>,
) => {
	const [isTallerThan, setIsTallerThan] = useState(false)

	useEffect(() => {
		const callback = () => {
			if (targetRef.current && referenceRef.current) {
				const targetHeight = targetRef.current.offsetHeight
				const referenceHeight = referenceRef.current.offsetHeight
				const isTallerThan = targetHeight > referenceHeight

				setIsTallerThan((prevIsTallerThan) =>
					isTallerThan !== prevIsTallerThan ? isTallerThan : prevIsTallerThan,
				)
			}
		}

		callback()

		const observer = new ResizeObserver(callback)

		if (targetRef.current) observer.observe(targetRef.current)
		if (referenceRef.current) observer.observe(referenceRef.current)

		return () => {
			observer.disconnect()
		}
	}, [targetRef, referenceRef])

	return isTallerThan
}

export default useIsTallerThan
