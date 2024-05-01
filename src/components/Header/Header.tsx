import { useState } from 'react'
import { NavLink as ReactRouterNavLink } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion, AnimatePresence } from 'framer-motion'

import useIntlMessages from 'hooks/useIntlMessages'
import {
  DesktopNavigation,
  HamburgerIcon,
  HeaderWrapper,
  MobileNavigation,
  StyledHeader,
} from './Header.styles'
import logo from '../../assets/images/logo/binland-logo.svg'
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher'
import NavLink from 'ui/NavLink/NavLink'
// import ButtonLink from 'ui/ButtonLink/ButtonLink'
import { NavbarItems } from './Header.data'
import Button from 'ui/Button/Button'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const intl = useIntlMessages()

  const navbarItems = NavbarItems

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev)

    if (typeof window != 'undefined' && window.document && !isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.2,
      },
    },
  }

  return (
    <>
      <StyledHeader>
        <HeaderWrapper size="xl">
          <ReactRouterNavLink to={'/'}>
            <img src={logo} alt="Binland logo" />
          </ReactRouterNavLink>
          <HamburgerIcon>
            <LanguageSwitcher />
            {!isOpen && (
              <GiHamburgerMenu
                onClick={handleIsOpen}
                cursor={'pointer'}
                size={20}
              />
            )}
          </HamburgerIcon>
          <DesktopNavigation>
            <ul className="nav-items">
              {navbarItems.map((navItem) => (
                <NavLink key={navItem.name} item={navItem} />
              ))}
            </ul>
            <div className="nav-buttons">
              <a className="temporary-anchor" href="/#home-contact-us">
                <Button type="secondary" size="lg" $isfullwidth={isOpen}>
                  {intl('home.navbar.button.contact.us')}
                </Button>
              </a>
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
              animate={{ height: '100svh' }}
              transition={{ duration: 0.4 }}
              exit="exit"
            >
              <div>
                <CgClose onClick={handleIsOpen} cursor={'pointer'} size={20} />
              </div>
              <ul className="nav-items">
                {navbarItems.map((navItem) => (
                  <NavLink
                    key={navItem.name}
                    item={navItem}
                    onClick={handleIsOpen}
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
              <a className="temporary-anchor" href="/#home-contact-us">
              <Button
                type="secondary"
                size="lg"
                onClick={handleIsOpen}
                $isfullwidth={true}
              >
                {intl('home.navbar.button.contact.us')}
              </Button>
              </a>
            </MobileNavigation>
          )}
        </AnimatePresence>
      </StyledHeader>
    </>
  )
}

export default Header
