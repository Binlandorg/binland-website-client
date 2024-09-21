import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import Section from "ui/Section/Section"

export const WrapperQuestion = styled(Section)`
  width: 19.5rem;
  flex-wrap: wrap;
  gap: 3rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row-reverse;
    width: 100%;
    gap: 5rem;
  }

  .img-question-seo {
    border-radius: 1rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
      width: 27.562rem;
      height: 27.562rem;
    }
  }
`

export const WrapperQuestionSeo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 28.812rem;
    height: 27.562rem;
    gap: 3rem;
    justify-content: start;
    padding-top: 3rem;
  }
`

export const TitleQuestion = styled.p`
  font-weight: 600;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 3rem;
  color: ${colors.secondary.main};

  .title-question-seo {
    color: ${colors.red[1000]};
    text-transform: uppercase;
    font-weight: 700;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    line-height: 4.5rem;
  }
`
export const TitleResponse = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: start;
`
