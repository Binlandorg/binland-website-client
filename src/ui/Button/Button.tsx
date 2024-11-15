import type { IButton } from "types/ui/Button"
import { StyledButton } from "./Button.styles"

const Button: React.FC<IButton> = ({ className, children, ...rest }) => {
	return (
		<StyledButton className={className} {...rest}>
			{children}
		</StyledButton>
	)
}

export default Button
