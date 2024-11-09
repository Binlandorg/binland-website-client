import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { CgClose } from "react-icons/cg"
import { GiHamburgerMenu } from "react-icons/gi"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { NavLink as ReactRouterNavLink } from "react-router-dom"

import LanguageSwitcher from "components/LanguageSwitcher/LanguageSwitcher"
import useIntlMessages from "hooks/useIntlMessages"
import ButtonLink from "ui/ButtonLink/ButtonLink"
import NavLink from "ui/NavLink/NavLink"
import logo from "../../assets/images/binland/logo.svg"
import { NavbarItems } from "./Header.data"
import {
	DesktopNavigation,
	HamburgerIcon,
	HeaderWrapper,
	MobileNavigation,
	StyledHeader,
} from "./Header.styles"

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const intl = useIntlMessages()

	const navbarItems = NavbarItems

	const handleIsOpen = () => {
		setIsOpen((prev) => !prev)

		if (typeof window !== "undefined" && window.document && !isOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "unset"
		}
	}

	const item = {
		exit: {
			opacity: 0,
			height: 0,
			transition: {
				ease: "easeInOut",
				duration: 0.5,
				delay: 0.2,
			},
		},
	}

	return (
		<>
			<StyledHeader>
				<HeaderWrapper size="xl">
					<ReactRouterNavLink to={"/"}>
						<LazyLoadImage
							src={logo}
							alt="Binland logo"
							width={130}
							height={26}
							className="logo-picture"
						/>
					</ReactRouterNavLink>
					<HamburgerIcon>
						<LanguageSwitcher />
						{!isOpen && (
							<GiHamburgerMenu onClick={handleIsOpen} cursor={"pointer"} size={20} />
						)}
					</HamburgerIcon>
					<DesktopNavigation>
						<ul className="nav-items">
							{navbarItems.map((navItem) => (
								<NavLink
									key={navItem.name}
									item={navItem}
									ariaLabel={navItem.ariaLabel}
								/>
							))}
						</ul>
						<div className="nav-buttons">
							<ButtonLink to={"/contact-us"} type="secondary">
								{intl("home.navbar.button.contact.us")}
							</ButtonLink>
							<LanguageSwitcher />
						</div>
					</DesktopNavigation>
				</HeaderWrapper>

				<AnimatePresence>
					{isOpen && (
						<MobileNavigation
							as={motion.nav}
							variants={item}
							initial={{ height: 0 }}
							animate={{ height: "100svh" }}
							transition={{ duration: 0.4 }}
							exit="exit"
						>
							<button type="button" className="close" onClick={handleIsOpen}>
								<CgClose cursor={"pointer"} size={20} />
							</button>
							<ul className="nav-items">
								{navbarItems.map((navItem) => (
									<NavLink
										key={navItem.name}
										item={navItem}
										onClick={handleIsOpen}
										ariaLabel={navItem.ariaLabel}
									/>
								))}
							</ul>
							{/* <ButtonLink
                to="/contact-us"
                type="secondary"
                size="lg"
                onClick={handleIsOpen}
                isfullwidth={true}
              >
                {intl('home.navbar.button.contact.us')}
              </ButtonLink> */}
							<ButtonLink
								to={"/contact-us"}
								type="secondary"
								onClick={handleIsOpen}
								$isfullwidth={true}
							>
								{intl("home.navbar.button.contact.us")}
							</ButtonLink>
						</MobileNavigation>
					)}
				</AnimatePresence>
			</StyledHeader>
		</>
	)
}

export default Header
