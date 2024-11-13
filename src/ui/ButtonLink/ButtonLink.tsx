import type { NavLinkProps } from "react-router-dom"

import type { PropsWithChildren } from "react"
import Button from "ui/Button/Button"
import type { IStyledButtonLink } from "./ButtonLink.styles"
import { CustomNavLink } from "./ButtonLink.styles"

interface ICustomProps extends PropsWithChildren {
	type: "primary" | "secondary"
	size?: "sm" | "md" | "lg"
}

type INavLinkProps = NavLinkProps & ICustomProps & IStyledButtonLink

const ButtonLink: React.FC<INavLinkProps> = ({
	type,
	className,
	children,
	size,
	$isfullwidth,
	...rest
}) => {
	return (
		<CustomNavLink {...rest} $isfullwidth={$isfullwidth}>
			<Button type={type} size={size} $isfullwidth={$isfullwidth}>
				{children}
			</Button>
		</CustomNavLink>
	)
}

export default ButtonLink
