import type { IButton } from "types/ui/Button"
import { StyledButton } from "./Button.styles"

const Button: React.FC<IButton> = ({
	className,
	children,
	type = "button",
	...rest
}) => {
	return (
		<StyledButton className={className} type={type} {...rest}>
			{children}
		</StyledButton>
	)
}

export default Button
