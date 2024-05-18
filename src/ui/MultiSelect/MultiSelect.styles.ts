import styled, { css, keyframes } from 'styled-components'
import { FiSearch } from 'react-icons/fi'

import { colors } from 'styles/colors'
import { IInputBoxProps } from 'types/ui/Multiselect'

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

export const MultiSelectWrapper = styled.div<IInputBoxProps>`
  position: relative;

  &:focus-within {
    outline: none;
    border-radius: 0.375rem;
    outline: 0.125rem solid ${colors.tertiary.focus[500]};
  }

  ${(props) =>
    props.$isOpen &&
    `
    outline: none;
    border: none;
  `};
`

export const InputBox = styled.div<IInputBoxProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.tertiary.normal[50]};
  padding: 1.5rem 1.75rem;
  border-radius: ${({ $isOpen }) =>
    $isOpen ? '0.375rem 0.375rem 0 0' : '0.375rem'};
  gap: 0.6rem;
  cursor: pointer;

  transition: padding, gap 0.3s ease;

  ${(props) =>
    props.$isOpen &&
    `
    outline: 0.125rem solid ${colors.tertiary.focus[500]};
    
    &::after {
      content: '';
      width: 100%;
      height: 0.5rem;
      background-color: ${colors.tertiary.normal[50]};
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;
    }
  `}

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

export const DisplayOptions = styled.div<IInputBoxProps>`
  position: absolute;
  top: 100%;
  z-index: 2;
  width: 100%;
  outline: 0.125rem solid ${colors.tertiary.focus[500]};
  border-radius: 0 0 0.375rem 0.375rem;
  overflow: hidden;
`

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 13.5rem;
  overflow-y: scroll;
  border-radius: 0 0 0.375rem 0.375rem;

  &::-webkit-scrollbar {
    width: 0.3rem;
    border-radius: 0.375rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.tertiary.focus[500]};
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.tertiary.normal[200]};
    border-radius: 0 0 0.2rem 0;
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
