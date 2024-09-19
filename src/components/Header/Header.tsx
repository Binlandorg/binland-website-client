import { useState } from 'react'
import { NavLink as ReactRouterNavLink } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion, AnimatePresence } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import {
  DesktopNavigation,
  HamburgerIcon,
  HeaderWrapper,
  MobileNavigation,
  StyledHeader,
} from './Header.styles'
import logo from '../../assets/images/binland/logo.svg'
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher'
import NavLink from 'ui/NavLink/NavLink'
import Button from 'ui/Button/Button'
import { NavbarItems } from './Header.data'
import useIntlMessages from 'hooks/useIntlMessages'

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
                <NavLink
                  key={navItem.name}
                  item={navItem}
                  ariaLabel={navItem.ariaLabel}
                />
              ))}
            </ul>
            <div className="nav-buttons">
              <a className="temporary-anchor" href="/contact-us">
                <Button type="secondary" $isfullwidth={isOpen}>
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
              <button className="close" onClick={handleIsOpen}>
                <CgClose cursor={'pointer'} size={20} />
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
              <a className="temporary-anchor" href="/contact-us">
                <Button
                  type="secondary"
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
