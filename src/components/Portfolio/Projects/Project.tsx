import { useState } from "react"
import type { To } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import useIntlMessages from "hooks/useIntlMessages"
import type { PortfolioType } from "types/global"
import SubTab from "ui/SubTab/SubTab"
import H4 from "ui/Titles/H4"
import { ProjectItem } from "./Projects.styles"

const Project: React.FC<{ portfolio: PortfolioType }> = ({ portfolio }) => {
	const [isHover, setIsHover] = useState(false)
	const navigate = useNavigate()
	const intl = useIntlMessages()

	const handleClick = (to: To) => {
		navigate(to)
	}

	return (
		<ProjectItem
			onClick={() => handleClick(portfolio.to)}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div
				className="thumbnail-wrapper"
				style={{
					display: isHover ? "none" : "block",
				}}
			>
				<img src={portfolio.image} alt={portfolio.name} />
				<div className="text">
					<H4 $weight="regular" className="name">
						{portfolio.name}
					</H4>
					<SubTab $weight="semibold" className="description">
						{intl(portfolio.description)}
					</SubTab>
				</div>
			</div>
			<video
				src={portfolio.video}
				poster={portfolio.image}
				onMouseEnter={(e) => e.currentTarget.play()}
				onMouseLeave={(e) => {
					e.currentTarget.pause()
					e.currentTarget.currentTime = 0
				}}
				style={{
					display: isHover ? "block" : "none",
				}}
				loop
				muted
				playsInline
			/>
		</ProjectItem>
	)
}

export default Project
