import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import Container from 'ui/Container/Container'
import { colors } from 'styles/colors'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  max-height: 4.5rem;

  position: fixed;
  top: 0;
  z-index: 10;
`

export const HeaderWrapper = styled(Container)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  position: relative;
  padding: 1rem 1rem;
  height: 4.5rem;
`

export const HamburgerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

export const DesktopNavigation = styled.nav`
  display: none;

  @media only screen and (min-width: ${breakpoints.lg}) {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 3rem;
    align-items: center;
    background: none;
    top: 0;
    height: 4.5rem;

    .nav-items {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }

    .nav-items li {
      border: none;
    }

    .nav-items li a {
      padding: 0.25rem 0;
    }

    .nav-buttons {
      display: flex;
      gap: 1rem;
    }
  }
`

export const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.75rem;
  background: ${colors.white.main};
  height: 100vh;
  height: 100svh;
  font-weight: 500;
  position: absolute;
  top: 0;
  left: 0;
  gap: 1.5rem;
  padding: 1.625rem;

  .nav-items {
    width: 100%;
  }

  .nav-items li {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 0.0625rem solid ${colors.secondary.main};
  }

  .nav-items li a {
    padding: 1.5rem 0;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
