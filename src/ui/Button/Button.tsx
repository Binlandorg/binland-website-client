import type { IButton } from "types/ui/Button"
import { Loader, StyledButton } from "./Button.styles"

const Button: React.FC<IButton> = ({
	className,
	children,
	type = "button",
	disabled,
	loading,
	...rest
}) => {
	return (
		<StyledButton className={className} type={type} disabled={disabled} {...rest}>
			{loading && <Loader />}
			{children}
		</StyledButton>
	)
}

export default Button
