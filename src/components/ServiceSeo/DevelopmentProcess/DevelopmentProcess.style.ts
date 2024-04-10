import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'
import Container from 'ui/Container/Container'
import { IContainerUlTabs } from 'types/components/service'

export const ContainerProcess = styled(Container)`
  padding: 0;
  margin: 0;
  gap: 3rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 5rem;
    padding: 10rem 5rem;
  }
`

export const WrapperTitleProcess = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 3rem;
  }

  .title-process {
    font-weight: 700;
    font-size: clamp(2rem, 1.375rem + 3.125vw, 3.375rem);
    line-height: 1.5;
  }

  .description-process {
    margin: 0;
    font-weight: 400;
    font-size: clamp(1rem, 0.9432rem + 0.2841vw, 1.125rem);
    line-height: 1.5;
  }

  .red-word {
    color: ${colors.red[1000]};
  }
`

export const WrapperTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.125rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    width: 45.375rem;
    height: 15.25rem;
    gap: 2.812rem;
  }
`

export const ContainerUlTabs = styled.div<IContainerUlTabs>`
  display: flex;
  position: relative;
  border-radius: 6.25rem;
  padding: 1.5rem 2.625rem;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  width: ${(props) => props.$dimension}rem;
  height: auto;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
    width: auto;
    height: ${(props) => props.$dimension}rem;
  }

  .line {
    width: 100%;
    height: 0.125rem;
    background-color: #e98b91;

    @media only screen and (min-width: ${breakpoints.lg}) {
      width: 0.1875rem;
      height: 100%;
    }
  }

  .button-tabs {
    position: relative;
    border: none;
    background: none;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
  }

  .bubble {
    display: flex;
    position: absolute;
    top: -0.375rem;
    right: 0;
    bottom: 0;
    left: -0.375rem;
    background-color: #e98b91;
    width: 1.812rem;
    height: 1.812rem;
    border-radius: 50%;
    z-index: 9999;
    pointer-events: none;
    .bubble-two {
      background-color: ${colors.red[1000]};
      width: 0.8125rem;
      height: 0.815rem;
      border-radius: 50%;
      margin: auto;
      align-items: center;
    }
  }
`

export const TabsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.0625rem;
  width: 1.0625rem;
  font-size: 1.25rem;
  font-weight: 500;
  z-index: 2;
  border-radius: 50%;
  text-align: center;
  color: transparent;
  background-color: #e98b91;
  transition: background-color 6s ease;

  &.selected {
    cursor: pointer;
    height: 1rem;
    width: 1rem;
  }

  &.desactive {
    color: transparent;
  }
`

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.secondary.main};
  border-radius: 1rem;
  padding: 3rem 2rem;
  color: ${colors.gray[50]};
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.md}) {
    width: 80%;
    height: 100%;
    padding: 3rem;
    margin: auto;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 38.75rem;
    height: 15.25rem;
    padding: 3rem;
  }

  .wrapper-info-title {
    font-weight: 700;
    font-size: clamp(1rem, 0.9432rem + 0.2841vw, 1.125rem);
    line-height: 1.5;
  }

  .wrapper-info-description {
    font-weight: 400;
    font-size: clamp(0.875rem, 0.8182rem + 0.2841vw, 1rem);
    line-height: 1.5;
  }
`
