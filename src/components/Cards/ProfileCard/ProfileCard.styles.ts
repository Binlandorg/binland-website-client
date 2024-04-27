import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"

export const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: ${breakpoints.sm}){
    max-width: 281px;
    width: 100%;
  }
`

export const CardImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  max-width: 170px;
  max-height: 170px;
  border: 5px solid white;
  border-radius: 1rem;
  align-self: center;

  @media (min-width: ${breakpoints.xl}){
    width: 170px;
    height: 170px;
  }
`
export const CardData = styled.div``
export const CardDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ProfileName = styled.div`
  text-align: center;
  color: ${colors.secondary.main};
`
export const ProfilePosition = styled.div`
  text-align: center;
  color: ${colors.primary.normal[500]};
`
export const ProfileQuote = styled.div`
  text-align: center;
  color: ${colors.secondary.main};

  & p{
    font-size: 0.875rem;
  }
`
export const ProfileNetworks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0.625rem;
`
export const ProfileNetwork = styled.li``
export const AnchorIcon = styled.a`
  color: ${colors.secondary.main};

  & svg{
    width: 1.5rem;
    height: 1.5rem;
  }
`