import type React from "react"
import { StyledSection } from "./section.styles"

interface ISection {
	id?: string
	type: "margin" | "padding"
	size: "sm" | "md" | "lg" | "xl"
	className?: string
	children: React.ReactNode
}

const Section: React.FC<ISection> = ({
	id,
	type,
	size,
	className,
	children,
}): React.ReactElement => {
	return (
		<StyledSection id={id} type={type} size={size} className={className}>
			{children}
		</StyledSection>
	)
}

export default Section
