import useIntlMessages from "hooks/useIntlMessages"
import { StyledAnchor, StyledListItem } from "./NavLink.styles"

interface INavLink {
	name: string
	href: string
}

interface NavLinkProps {
	item: INavLink
	onClick?: (() => void) | undefined
	ariaLabel: string
}

const NavLink: React.FC<NavLinkProps> = ({
	item,
	onClick,
	ariaLabel,
}): React.ReactElement => {
	const intl = useIntlMessages()
	return (
		<StyledListItem>
			<StyledAnchor
				to={item.href}
				onClick={onClick}
				aria-label={intl(ariaLabel)}
			>
				{item.name}
			</StyledAnchor>
		</StyledListItem>
	)
}

export default NavLink
