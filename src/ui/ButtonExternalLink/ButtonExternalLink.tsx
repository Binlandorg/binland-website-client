import type { IButton, IStyledButton } from "../../types/ui/Button"
import { StyledButtonExternalLink } from "./ButtonExternalLink.styles"

interface IButtonExternalLink {
	href: string
}
type Props = IButton & IStyledButton & IButtonExternalLink

const ButtonExternalLink: React.FC<Props> = ({
	children,
	href,
	className,
	...rest
}) => {
	return (
		<StyledButtonExternalLink
			className={className}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			{...rest}
		>
			{children}
		</StyledButtonExternalLink>
	)
}

export default ButtonExternalLink
