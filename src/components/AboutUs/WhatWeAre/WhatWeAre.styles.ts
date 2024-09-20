import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import SectionAboutUs from "../SectionAboutUs/SectionAboutUs"

export const SectionWhatWeAre = styled(SectionAboutUs)``

export const WhatWeAreWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.xl}) {
    gap: 6.25rem;
  }
`
