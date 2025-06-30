import type { NavLinkProps } from "react-router-dom"

import type { IButton } from "types/ui/Button"
import { CustomNavLink } from "./ButtonLink.styles"

type Props = NavLinkProps & IButton

const ButtonLink: React.FC<Props> = ({
	className,
	children,
	type = "button",
	...rest
}) => {
	return (
		<CustomNavLink className={className} type={type} {...rest}>
			{children}
		</CustomNavLink>
	)
}

export default ButtonLink
