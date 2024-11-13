import type { IButtonAnchor, IStyledButton } from "types/ui/ButtonAnchor"
import { StyledButtonAnchor } from "./ButtonAnchor.styles"

type Props = IButtonAnchor & IStyledButton

const ButtonAnchor: React.FC<Props> = ({
	children,
	href,
	className,
	...rest
}) => {
	return (
		<StyledButtonAnchor
			className={className}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			{...rest}
		>
			{children}
		</StyledButtonAnchor>
	)
}

export default ButtonAnchor
