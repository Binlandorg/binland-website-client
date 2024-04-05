import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'

import { colors } from 'styles/colors'

export const StyledTeamMemberCard = styled.div`
  flex: 1 0 18.75rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  @media only screen and (min-width: ${breakpoints.xl}) {
    max-width: 18.75rem;
  }
`

export const ImgFounder = styled.img`
  width: 9.625rem;
  margin: 0 auto;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.375rem solid ${colors.gray[50]};
`

export const NameFounder = styled.h4`
  font-size: clamp(1.125rem, 4vw, 1.375rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0.3125rem;
  color: ${colors.black.main};
`

export const PositionFounder = styled.p`
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.125, 4vw, 1.375rem);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.3125rem;
  color: ${colors.primary.main};
`

export const QuoteFounder = styled.p`
  font-size: clamp(0.75rem, 4vw, 1rem);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0.3125rem;
  color: ${colors.black.main};

  @media only screen and (min-width: ${breakpoints.lg}) {
    text-align: start;
  }
`

export const LinkFounder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.625rem;
  gap: 0.625rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    justify-content: flex-start;
  }

  a {
    color: #000;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-right: 0.625rem;
  }
`
