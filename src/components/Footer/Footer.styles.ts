import styled from 'styled-components'

import { colors } from 'styles/colors'
import { breakpoints } from 'shared/breakpoints'
import Container from 'ui/Container/Container'

export const StyledFooter = styled.footer`
  width: 100%;
  min-height: 20rem;
  background: ${colors.black.main};
  color: ${colors.white.main};
`

export const FooterWrapper = styled(Container)`
  flex-direction: column;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 3rem;
  font-size: 0.875rem;
  align-items: flex-start;
  gap: 3rem;

  .text-footer {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    gap: 4rem;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }
`

export const FooterLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .footer-logo {
    width: 12rem;
    height: auto;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 35%;
  }
`

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;

  @media only screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 3.125rem;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .link-item {
    color: ${colors.white.main};
    list-style: none;
    text-decoration: none;
    cursor: pointer;
  }

  .link-item:hover {
    color: ${colors.primary.main};
  }

  .container-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 2rem;
  }
`

export const FooterSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .social-media__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (min-width: ${breakpoints.md}) {
      gap: 1.5rem;
    }
  }

  .social-media__content > div:first-child {
    align-self: flex-start;
  }

  .container-email {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    word-break: break-all;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    gap: 2rem;
  }
`
