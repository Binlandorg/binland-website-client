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
  padding-top: 4rem;
  padding-bottom: 4rem;
  font-size: 0.875rem;
  align-items: flex-start;
  gap: 2.5rem;

  .text-footer {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    gap: 1rem;
  }
`

export const FooterLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  .footer-logo {
    width: 11.25rem;
    height: auto;
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

  .title-links {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.65rem;
  }

  .container-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 1.5rem;
  }
`

export const FooterSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .title-social-media {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.65rem;
  }

  .container-email {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    word-break: break-all;
  }
`
