import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import Container from "ui/Container/Container"

export const ContainerProcess = styled(Container)`
  margin: 0;
  gap: 3rem;
  padding: 3rem 1.5rem;

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
    font-weight: 600;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: clamp(48px, calc(1.5 * 1rem), 72px);
  }

  .description-process {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.687rem;
  }
  .red-word {
    color: ${colors.red[1000]};
  }
`

export const WrapperTabs = styled.div`
  display: flex;
  flex-direction: column;
  width: 19.5rem;
  height: 25.312rem;
  gap: 1.125rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    width: 45.375rem;
    height: 15.25rem;
    gap: 3rem;
  }
`

export const ContainerUlTabs = styled.ul`
  list-style: none;
  display: flex;
  position: relative;
  border-radius: 6.25rem;
  padding: 1rem;
  justify-content: space-around;
  align-items: center;
  margin: 0;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 15%;
    width: 69%;
    height: 0.062rem;
    background-color: #f0c3c5;
    transform: translateY(-50%);
    z-index: 0;

    @media only screen and (min-width: ${breakpoints.lg}) {
      content: '';
      position: absolute;
      top: 1.875rem;
      width: 12.0625rem;
      height: 0.1875rem;
      background-color: #f0c3c5;
      transform: rotate(90deg);
      z-index: 0;
      transform-origin: 0 0;
      left: 52%;
    }
  }
`

export const TabsIcon = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.0625rem;
  width: 1.0625rem;
  font-size: 1.25rem;
  font-weight: 500;
  z-index: 2;
  background-color: #f0c3c5;
  border-radius: 50%;
  transition: all 0.3s;
  text-align: center;

  &.selected {
    cursor: pointer;
    height: 1.8125rem;
    width: 1.8125rem;
    color: ${colors.red[1000]};
    background-color: #e98b91;
    transform: scale(1.1);
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

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 38.75rem;
    height: 15.25rem;
    padding: 3rem;
  }

  .wrapper-info-title {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.875rem;
  }

  .wrapper-info-description {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`
