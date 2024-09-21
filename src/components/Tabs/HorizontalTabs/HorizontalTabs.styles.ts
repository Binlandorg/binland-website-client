import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"

export const HorizontalTabsWrapper = styled.div`
  display: none;

  @media only screen and (min-width: ${breakpoints.md}) {
    width: 100%;
    display: block;
  }
`

export const TabsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.0625rem;

  :first-child {
    border-top-left-radius: 1rem;
  }

  :last-child {
    border-top-right-radius: 1rem;
  }
`

export const SingleTab = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 1rem 2.5rem;
  background: ${colors.secondary.main};
  color: ${colors.white.main};
  font-weight: 600;
  text-align: center;

  &.selected {
    background: ${colors.white.main};
    margin: 0 0.625rem;
    color: ${colors.primary.main};
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  &:has(+ .selected) {
    border-top-right-radius: 1rem;
  }

  &.selected + li {
    border-top-left-radius: 1rem;
  }
`

export const ContentWrapper = styled.div`
  background: ${colors.white.main};
  border-radius: 1rem;
  padding: 2rem 1.5rem;
`
