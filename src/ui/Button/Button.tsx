import type { IButton } from "types/ui/Button"
import { StyledButton } from "./Button.styles"

const Button: React.FC<IButton> = ({
	size,
	children,
	leftIcon,
	rightIcon,
	$isfullwidth,
	className,
	disabled,
	...props
}) => {
	return (
		<StyledButton
			{...props}
			disabled={disabled}
			size={size}
			$isfullwidth={$isfullwidth}
			className={className}
		>
			{leftIcon}
			{children}
			{rightIcon}
		</StyledButton>
	)
}

export default Button
