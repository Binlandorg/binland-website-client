import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import backgroundContact from './../../assets/images/imgContactUs/background-contact-us.svg'
import Container from 'ui/Container/Container'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import Section from 'ui/Section/Section'
import { ContentWrapper } from 'components/ContactUs/ContactUs.styles'

export const ContactUsHero = styled.div`
  width: 100%;
  background-image: url(${backgroundContact});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 13.375rem;
  display: flex;
  align-items: center;

  @media only screen and (min-width: ${breakpoints.lg}) {
    height: 27.687rem;
  }
`

export const SectionTitleHero = styled(Section)`
  max-width: 100%;
`

export const HeroWrapper = styled(Container)`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`

export const Title = styled(SectionTitle)`
  color: white;
  font-weight: 700;
  font-size: clamp(2rem, 8vw, 5rem);
  line-height: 7.5rem;
  text-transform: uppercase;
`

export const SectioContactUsPage = styled(Section)`
  padding-top: 3rem;
  padding-bottom: 1.5rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 5rem 5rem 10rem 5rem;
  }
`
export const ContactUsContentWrapper = styled(ContentWrapper)`
  padding: 0;
  gap: 0.875rem;
`
