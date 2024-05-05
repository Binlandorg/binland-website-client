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
  background: ${colors.body};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  padding-inline: 1.5rem;

  position: sticky;
  top: 0;
  z-index: 20;

  @media only screen and (min-width: ${ breakpoints.lg }){
    padding-inline: 5rem;
  }
`

export const HeaderWrapper = styled(Container)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 0rem;
  height: 4.5rem;
`

export const HamburgerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  & > div > div + div{
    border-radius: 18px !important;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }

  `

export const DesktopNavigation = styled.nav`
  display: none;
  
  .temporary-anchor {
    text-decoration: none;
  }

  & .temporary-anchor + div > div + div{
    border-radius: 18px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 3rem;
    align-items: center;
    background: none;
    top: 0;

    .nav-items {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }

    .nav-items li {
      border: none;
    }

    .nav-items li a {
      font-size: 1rem;
      padding: 0.75rem 1rem;
      line-height: 1;
      border-radius: 0.6rem;
    }

    .nav-buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`

export const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${colors.white.main};
  height: 100vh;
  height: 100svh;
  height: 100lvh;
  height: 100dvh;
  font-weight: 500;
  position: fixed;
  gap: 1.5rem;
  padding: 1.625rem;

  .temporary-anchor {
    text-decoration: none;
    width: 100%;
  }

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
    width: 100%;
    font-size: 1rem;
    padding: 1.5rem 1rem;
    line-height: 1;
    border-radius: 0.6rem;
    text-align: center;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }

  & .close {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3rem;
    border: none;
    background: none;

    &:active {
      background-color: ${colors.secondary.active[200]};
    }
  }
`
