import { useEffect, useRef } from "react"
import type { CSSProperties } from "react"

import useIntlMessages from "hooks/useIntlMessages"
import { colors } from "styles/colors"
import H2 from "ui/Titles/H2"
import WhatWeAreCard from "../../Cards/WhatWeAreCard/WhatWeAreCard"
import { whatWeAreData } from "./WhatWeAre.data"
import { setCirclePosition, setDotPosition } from "./WhatWeAre.helper"
import { setGradientPosition } from "./WhatWeAre.helper"
import { Section, WhatWeAreWrapper, Wrapper } from "./WhatWeAre.styles"

const WhatWeAre: React.FC = () => {
	const intl = useIntlMessages()
	const container = useRef<HTMLSpanElement>(null)
	const svgRef = useRef<SVGSVGElement>(null)
	const circleRef = useRef<SVGCircleElement>(null)
	const gradientRef = useRef<SVGLinearGradientElement>(null)
	const dotRef = useRef<HTMLSpanElement>(null)

	const config = {
		speed: 2.66,
		pathStrokeWidth: 3,
		dotRadius: 4,
		viewBoxWidth: 588,
		viewBoxHeight: 673,
		delta: 1,
		pathId: "back-circuit__path",
		trailSize: 22,
	}

	useEffect(() => {
		let progressBar = 0
		let progressDot = config.trailSize
		let animationId = 0

		const animation = () => {
			if (!svgRef.current || !circleRef.current || !gradientRef.current) return
			if (!dotRef.current || !container.current) return

			const path = svgRef.current.getElementById(config.pathId) as SVGPathElement
			const pathLength = path.getTotalLength()

			setGradientPosition(svgRef, gradientRef, progressBar, config)
			setCirclePosition(circleRef, progressBar, svgRef, config)
			setDotPosition(progressDot, container, svgRef, dotRef, config)

			progressBar += config.speed
			progressDot += config.speed

			if (progressBar > pathLength) progressBar = 0
			if (progressDot > pathLength) progressDot = 0

			animationId = requestAnimationFrame(animation)
		}

		animation()

		return () => {
			cancelAnimationFrame(animationId)
		}
	}, [])

	return (
		<Section type="margin" size="lg">
			<Wrapper>
				<span className="back-circuit__container" ref={container}>
					<svg
						width="70%"
						height="115%"
						viewBox="0 0 588 673"
						fill="none"
						preserveAspectRatio="none"
						ref={svgRef}
						id="back-circuit__svg"
					>
						<title>What We Are</title>
						<path
							id={config.pathId}
							opacity="0.5"
							d="M2 26V142C2 155.255 12.7452 166 26 166H263C276.255 166 287 176.745 287 190V647.5C287 660.755 297.745 671.5 311 671.5H562.5C575.755 671.5 586.5 660.755 586.5 647.5V26C586.5 12.7452 575.755 2 562.5 2H26C12.7452 2 2 12.7452 2 26Z"
							stroke={colors.primary.main}
							strokeWidth={config.pathStrokeWidth}
							vectorEffect="non-scaling-stroke"
						/>
					</svg>
				</span>
				<div className="front-circuit__container">
					<svg
						width="70%"
						height="115%"
						viewBox="0 0 588 673"
						fill="none"
						preserveAspectRatio="none"
					>
						<title>Front Circuit</title>
						<mask
							id="front-circuit__mask"
							style={{ maskType: "alpha" }}
							maskUnits="userSpaceOnUse"
							x="0"
							y="0"
							width="588"
							height="673"
						>
							<path
								id="front-circuit__path"
								opacity="1"
								d="M2 26V142C2 155.255 12.7452 166 26 166H263C276.255 166 287 176.745 287 190V647.5C287 660.755 297.745 671.5 311 671.5H562.5C575.755 671.5 586.5 660.755 586.5 647.5V26C586.5 12.7452 575.755 2 562.5 2H26C12.7452 2 2 12.7452 2 26Z"
								stroke={colors.primary.main}
								strokeWidth={config.pathStrokeWidth}
								vectorEffect="non-scaling-stroke"
							/>
						</mask>
						<g mask="url(#front-circuit__mask)">
							<circle
								cx="2.5"
								cy="74.5"
								r={config.trailSize}
								fill="url(#front-circuit__gradient)"
								ref={circleRef}
							/>
						</g>
						<defs>
							<linearGradient
								id="front-circuit__gradient"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
								gradientUnits="objectBoundingBox"
								ref={gradientRef}
							>
								<stop offset="0%" stopColor="#F83D48" stopOpacity="0" />
								<stop offset="100%" stopColor="#FF000F" />
							</linearGradient>
						</defs>
					</svg>
					<span
						className="front-circuit__dot"
						style={{ "--size": `${config.dotRadius * 2}px` } as CSSProperties}
						ref={dotRef}
					/>
				</div>
				<H2 withDot>{intl("about.us.what.we.are.title").toUpperCase()}</H2>
				<WhatWeAreWrapper>
					{whatWeAreData.map((element) => (
						<WhatWeAreCard key={element.id} {...element} className="card" />
					))}
				</WhatWeAreWrapper>
			</Wrapper>
		</Section>
	)
}
export default WhatWeAre
