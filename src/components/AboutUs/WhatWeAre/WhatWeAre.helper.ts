export const setGradientPosition = (
	svgRef: React.RefObject<SVGSVGElement>,
	gradientRef: React.RefObject<SVGLinearGradientElement>,
	progressBar: number,
	config: {
		delta: number
		pathId: string
	},
) => {
	if (!svgRef.current || !gradientRef.current) return

	const path = svgRef.current.getElementById(config.pathId) as SVGPathElement
	const pointBar = path.getPointAtLength(progressBar)

	const pointBefore = path.getPointAtLength(progressBar - config.delta)
	const dx = pointBar.x - pointBefore.x
	const dy = pointBar.y - pointBefore.y

	let direction = "up"

	if (dx > 0) direction = "right"
	if (dx < 0) direction = "left"
	if (dy > 0) direction = "down"
	if (dy < 0) direction = "up"

	switch (direction) {
		case "right":
			gradientRef.current.setAttribute("x1", "0")
			gradientRef.current.setAttribute("y1", "0")
			gradientRef.current.setAttribute("x2", "1")
			gradientRef.current.setAttribute("y2", "0")
			break
		case "left":
			gradientRef.current.setAttribute("x1", "1")
			gradientRef.current.setAttribute("y1", "0")
			gradientRef.current.setAttribute("x2", "0")
			gradientRef.current.setAttribute("y2", "0")
			break
		case "down":
			gradientRef.current.setAttribute("x1", "0")
			gradientRef.current.setAttribute("y1", "0")
			gradientRef.current.setAttribute("x2", "0")
			gradientRef.current.setAttribute("y2", "1")
			break
		case "up":
			gradientRef.current.setAttribute("x1", "0")
			gradientRef.current.setAttribute("y1", "1")
			gradientRef.current.setAttribute("x2", "0")
			gradientRef.current.setAttribute("y2", "0")
			break
	}
}

export const setDotPosition = (
	progressDot: number,
	containerRef: React.RefObject<HTMLSpanElement>,
	svgRef: React.RefObject<SVGSVGElement>,
	dotRef: React.RefObject<HTMLSpanElement>,
	config: {
		pathStrokeWidth: number
		dotRadius: number
		viewBoxWidth: number
		viewBoxHeight: number
		delta: number
		pathId: string
	},
) => {
	if (!svgRef.current || !containerRef.current || !dotRef.current) return

	const containerBox = containerRef.current.getBoundingClientRect()
	const SVGbox = svgRef.current.getBoundingClientRect()
	const dot = dotRef.current

	const scaleX = SVGbox.width / config.viewBoxWidth
	const scaleY = SVGbox.height / config.viewBoxHeight

	const spaceLeft = Math.abs(containerBox.left - SVGbox.left)
	const path = svgRef.current.getElementById(config.pathId) as SVGPathElement
	const pointDot = path.getPointAtLength(progressDot)

	const dotPositionX = spaceLeft + (pointDot.x - config.dotRadius) * scaleX
	const dotPositionY = (pointDot.y - config.dotRadius) * scaleY

	dot.style.left = `${dotPositionX}px`
	dot.style.top = `${dotPositionY}px`
}

export const setCirclePosition = (
	circleRef: React.RefObject<SVGCircleElement>,
	progressBar: number,
	svgRef: React.RefObject<SVGSVGElement>,
	config: {
		pathId: string
	},
) => {
	if (!circleRef.current || !svgRef.current) return

	const circle = circleRef.current
	const path = svgRef.current.getElementById(config.pathId) as SVGPathElement
	const pointBar = path.getPointAtLength(progressBar)

	circle.setAttribute("cx", pointBar.x.toString())
	circle.setAttribute("cy", pointBar.y.toString())
}
