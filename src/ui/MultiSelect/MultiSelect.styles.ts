import styled, { css, keyframes } from 'styled-components'
import { FiSearch } from 'react-icons/fi'

import { colors } from 'styles/colors'
import { InputBoxProps } from 'types/ui/Multiselect'
import { breakpoints } from 'shared/breakpoints'

export const MirroredIcon = styled(FiSearch)`
  transform: scaleX(-1);
`

const textAnimation = keyframes`
  from {
    color: ${colors.secondary.normal[800]};
    transform: translate(0, 0) scale(1);
  }
  to {
    color: ${colors.secondary.normal[300]};
    transform: translate(-10%, -50%) scale(0.8)
  }
`

const dropAnimation = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-10%, -50%) 
  }
`

export const MultiSelectWrapper = styled.div<InputBoxProps>`
  position: relative;

  &:focus-within {
    outline: none;
    ${({ $isOpen }) =>
      !$isOpen && `border: 0.125rem solid ${colors.tertiary.focus[500]};`}
    border-radius: 0.375rem;
  }

  ${(props) =>
    props.$isOpen &&
    `
    outline: none;
    border: none;
  `};
`

export const InputBox = styled.div<InputBoxProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.tertiary.normal[50]};
  padding: 1.5rem 1.75rem;
  border: ${({ $isOpen }) =>
    $isOpen && `0.1rem solid ${colors.tertiary.focus[500]}`};
  border-bottom: none;
  border-radius: ${({ $isOpen }) =>
    $isOpen ? '0.375rem 0.375rem 0 0' : '0.375rem'};
  gap: 0.6rem;
  cursor: pointer;
  transition: padding, gap 0.3s ease;

  ${(props) =>
    (props.$isOpen || props.$servicesLength! > 0) &&
    css`
      & {
        padding: 1.5rem 1.75rem;
        gap: 0;
      }
      .span-question {
        animation: ${textAnimation} 0.3s ease forwards;
      }

      .arrow-button {
        animation: ${dropAnimation} 0.3s ease forwards;
      }
    `};

  .span-question {
    font-weight: 400;
    line-height: 1.5rem;
    font-size: 1rem;
    color: ${colors.secondary.main};
  }

  .input-box-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .arrow-button {
    cursor: pointer;
    color: ${colors.secondary.normal[300]};
    align-self: center;
  }
`

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.75rem;
  background-color: ${colors.black.main};
  color: ${colors.white.main};
  border-radius: 0.5rem;
  cursor: auto;

  .icon-close-wrapper {
    display: flex;
    place-content: center;
    width: 1.25rem;
    height: 1.25rem;
  }

  .icon-close {
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: ${colors.white.main};
      color: ${colors.black.main};
    }
  }
`

export const DisplayOptions = styled.div<InputBoxProps>`
  position: absolute;
  top: 100%;
  z-index: 2;
  width: 100%;
  border: ${({ $isOpen }) =>
    $isOpen && `0.1rem solid ${colors.tertiary.focus[500]}`};
  border-top: none;
  border-radius: 0 0 0.375rem 0.375rem;
`

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 13.5rem;
  overflow-y: scroll;
  border-radius: 0 0 0.375rem 0.375rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.375rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.secondary.normal[300]};
      border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${colors.secondary.hover[200]};
      border-radius: 0 0 0.2rem 0;
    }
  }
`

export const StyledOption = styled.span`
  padding: 1.5rem 1.75rem;
  background-color: ${colors.tertiary.normal[50]};
  border-bottom: 0.0625rem solid ${colors.secondary.normal[200]};
  color: ${colors.secondary.normal[800]};
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${colors.tertiary.hover[300]};
    color: ${colors.tertiary.hover[600]};
  }

  &:active {
    background-color: ${colors.tertiary.active[400]};
    color: ${colors.tertiary.active[700]};
  }
`
