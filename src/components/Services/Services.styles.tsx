import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import Container from "ui/Container/Container"

export const CustomSingleWord = styled.b`
  color: ${colors.primary.main};
`

export const ServicesWrapper = styled(Container)`
  gap: 1.5rem;

  & h2{
    text-align: center;
    max-width: 43.75rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 3rem;
  }
`
