import styled from 'styled-components'

import heroImg from './../../assets/images/ClientsPage/mockup-ui-chat.webp'
import { colors } from 'styles/colors'
import { breakpoints } from 'shared/breakpoints'
import Container from 'ui/Container/Container'

export const BlogWrapper = styled(Container)`
  margin: 0 auto;
`

export const BlogHero = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.95) 25%,
      rgba(0, 0, 0, 0.1) 75%
    ),
    url(${heroImg});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1rem;
  width: 100%;
  height: 12.125rem;
  color: ${colors.white.main};
  display: grid;
  place-content: center;

  .hero__title {
    font-weight: 700;
    font-size: 3rem;
    line-height: 5rem;
    text-align: center;
    text-transform: uppercase;

    @media only screen and (min-width: ${breakpoints.xs}) {
      font-size: 4rem;
    }

    @media only screen and (min-width: ${breakpoints.sm}) {
      font-size: 5rem;
      line-height: 7.5rem;
    }
  }
`
