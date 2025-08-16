import { BsWhatsapp } from "react-icons/bs"

import { COMPANY_PHONE_NUMBER } from "context/constants/constans"
import { PERU_PHONE_CODE } from "context/constants/constans"
import useIntlMessages from "hooks/useIntlMessages"
import { useEffect, useRef, useState } from "react"
import ButtonExternalLink from "ui/ButtonExternalLink/ButtonExternalLink"
import ButtonText from "ui/ButtonText/ButtonText"
import Paragraph from "ui/Paragraph/Paragraph"
import { linkWhatsappFormatter } from "utils/formatters/formatters"
import { BackGroundWrapper, BannerWrapper } from "./Banner.styles"

const Banner: React.FC = () => {
	const parentRef = useRef<HTMLDivElement>(null)
	const childRef = useRef<HTMLDivElement>(null)
	const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
	const [tracking, setTracking] = useState(false)

	const intl = useIntlMessages()
	const linkWhatsapp = linkWhatsappFormatter(
		PERU_PHONE_CODE,
		COMPANY_PHONE_NUMBER,
		"",
	)

	useEffect(() => {
		if (!tracking) return
		const handleMouseMove = (e: MouseEvent) => {
			const rectParent = parentRef.current?.getBoundingClientRect()
			const rectChild = childRef.current?.getBoundingClientRect()

			if (!rectParent || !rectChild) return

			const childWidth = rectChild.width
			const childHeight = rectChild.height

			const x = e.clientX - rectParent.left - childWidth / 2
			const y = e.clientY - rectParent.top - childHeight

			setPos({ x, y })
		}

		window.addEventListener("mousemove", handleMouseMove)

		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
		}
	}, [tracking])

	const handleMouseEnter = () => {
		setTracking(true)
	}

	return (
		<BannerWrapper ref={parentRef} onMouseEnter={handleMouseEnter}>
			<BackGroundWrapper>
				<div className="first-blob">
					<svg width="284" height="235" viewBox="0 0 284 235" fill="none">
						<title>blob</title>
						<path
							d="M234.233 219.622C221.723 217.262 204.704 208.548 195.64 202.95C185.037 197.117 172.619 195.121 167.735 194.852C157.635 193.728 146.609 191.744 124.503 201.256C78.0008 221.265 66.9549 241.831 39.9558 231.256C34.6304 229.17 13.9466 208.581 20.3451 192.2C26.7701 175.75 41.0265 167.293 35.9897 150.589C31.963 137.235 27.1767 128.341 24.2808 124.774C17.8674 116.874 8.08506 110.573 1.66011 87.4024C-0.245915 80.5288 -1.19111 72.209 4.57501 66.2221C13.7471 56.6988 27.7921 50.7835 36.333 51.2443C45.4034 51.7337 54.6983 55.4976 64.8395 55.7447C76.0707 56.0183 94.6352 55.4631 100.935 47.2842C109.484 36.1841 112.974 25.543 120.21 15.5575C126.866 6.37239 137.216 -0.976341 153.175 0.804012C155.895 1.10745 159.008 1.80824 160.828 4.87167C164.999 11.8936 166.719 18.452 168.201 23.4161C172.199 36.8051 170.537 47.428 173.217 55.908C178.907 73.9162 183.62 92.6206 196.753 102.813C205.069 109.267 218.102 107.534 227.716 109.538C237.462 111.57 250.005 114.059 259.248 120.111C269.047 126.528 283.213 145.174 283.739 161.802C284.027 170.913 281.057 179.857 276.694 190.363C272.207 201.168 267.449 214.29 250.617 218.358C244.979 219.721 239.703 220.654 234.233 219.622Z"
							fill="#6D4DA3"
						/>
					</svg>
				</div>
				<div className="second-blob">
					<svg width="263" height="246" viewBox="0 0 263 246" fill="none">
						<title>blob</title>
						<path
							d="M190.791 238.9C180.351 231.614 168.406 216.685 162.437 207.86C155.16 198.191 144.655 191.275 140.312 189.026C131.562 183.857 122.322 177.524 98.2592 177.127C47.6414 176.294 29.1296 190.517 8.84726 169.795C4.84675 165.707 -5.5681 138.445 6.98856 126.131C19.5972 113.767 36.0684 111.904 38.3289 94.6042C40.1361 80.7737 39.4207 70.6988 38.2435 66.2575C35.6364 56.4214 29.3008 46.6613 32.9486 22.8952C34.0308 15.8448 36.5825 7.86983 44.2974 4.77601C56.5695 -0.145317 71.8048 0.22308 79.4046 4.14782C87.4754 8.31583 94.4075 15.5621 103.554 19.9485C113.684 24.8064 130.842 31.9173 139.942 27.0433C152.293 20.4285 159.843 12.1566 170.539 6.01932C180.377 0.373992 192.831 -2.08082 206.654 6.09094C209.01 7.48375 211.562 9.4002 211.964 12.9405C212.887 21.0557 211.765 27.7422 211.079 32.8774C209.231 46.7278 203.357 55.7334 202.321 64.5661C200.121 83.3233 196.745 102.315 204.539 116.998C209.474 126.296 222.072 130.063 230.016 135.835C238.07 141.687 248.488 149.104 254.433 158.416C260.736 168.288 266.005 191.104 259.661 206.485C256.186 214.912 249.808 221.849 241.518 229.64C232.993 237.652 223.27 247.666 206.251 244.47C200.55 243.399 195.356 242.086 190.791 238.9Z"
							fill="#6D4DA3"
						/>
					</svg>
				</div>
				<div
					className="arcs"
					ref={childRef}
					style={pos ? { left: `${pos.x}px`, top: `${pos.y}px` } : {}}
				>
					<div className="first-arc">
						<svg width="542" height="270" viewBox="0 0 542 270" fill="none">
							<title>arc</title>
							<g style={{ mixBlendMode: "overlay" }}>
								<path
									d="M542 0C325.585 99.4339 200.36 94.9433 0 0V197.585C173.389 292.528 346.135 295.736 542 197.585V0Z"
									fill="#D9D9D9"
								/>
							</g>
						</svg>
					</div>
					<div className="second-arc">
						<svg width="542" height="270" viewBox="0 0 542 270" fill="none">
							<title>arc</title>
							<g style={{ mixBlendMode: "overlay" }}>
								<path
									d="M542 0C325.585 99.4339 200.36 94.9433 0 0V197.585C173.389 292.528 346.135 295.736 542 197.585V0Z"
									fill="#D9D9D9"
								/>
							</g>
						</svg>
					</div>
					<div className="third-arc">
						<svg width="542" height="270" viewBox="0 0 542 270" fill="none">
							<title>arc</title>
							<g style={{ mixBlendMode: "overlay" }}>
								<path
									d="M542 0C325.585 99.4339 200.36 94.9433 0 0V197.585C173.389 292.528 346.135 295.736 542 197.585V0Z"
									fill="#D9D9D9"
								/>
							</g>
						</svg>
					</div>
					<div className="front-arc">
						<svg width="542" height="270" viewBox="0 0 542 270" fill="none">
							<title>arc</title>
							<g style={{ mixBlendMode: "overlay" }}>
								<path
									d="M542 0C325.585 99.4339 200.36 94.9433 0 0V197.585C173.389 292.528 346.135 295.736 542 197.585V0Z"
									fill="#D9D9D9"
								/>
							</g>
						</svg>
					</div>
				</div>
				<div className="border-overlay">
					<svg
						width="522"
						height="385"
						viewBox="0 0 522 385"
						fill="none"
						preserveAspectRatio="none"
					>
						<title>border-overlay</title>
						<g>
							<mask id="path-1-inside-1_5067_8181" fill="white">
								<rect width="522" height="385" />
							</mask>
							<rect
								width="522"
								height="385"
								rx="16"
								stroke="url(#paint0_linear_5067_8181)"
								strokeWidth="80"
								mask="url(#path-1-inside-1_5067_8181)"
								vectorEffect="non-scaling-stroke"
							/>
						</g>
						<defs>
							<linearGradient
								id="paint0_linear_5067_8181"
								x1="261"
								y1="45.5"
								x2="261"
								y2="322.5"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="white" stopOpacity="0" />
								<stop offset="1" stopColor="white" />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</BackGroundWrapper>
			<div className="banner-text">
				<ButtonText className="title">{intl("portfolio.banner.title")}</ButtonText>
				<Paragraph $fontsize={12} className="sub-title">
					{intl("portfolio.banner.sub.title")}
				</Paragraph>
			</div>
			<ButtonExternalLink className="cta" href={linkWhatsapp}>
				{intl("portfolio.banner.button.label")} <BsWhatsapp />
			</ButtonExternalLink>
		</BannerWrapper>
	)
}

export default Banner
