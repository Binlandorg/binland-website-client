import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

import { colors } from 'styles/colors'

export const MirroredIcon = styled(FiSearch)`
  transform: scaleX(-1);
`

interface InputBoxProps {
  $isOpen: boolean
}

export const MultiSelectWrapper = styled.div<InputBoxProps>`
  position: relative;
`

export const InputBox = styled.div<InputBoxProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.gray[150]};
  padding: 1.5rem 1.75rem;
  border: ${({ $isOpen }) =>
    $isOpen &&
    `0.1rem solid ${colors.primary.main}`}; /* change de color with the correct palette */
  border-bottom: none;
  border-radius: ${({ $isOpen }) =>
    $isOpen ? '0.375rem 0.375rem 0 0' : '0.375rem'};
  gap: 0.6rem;
  cursor: pointer;

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
  gap: 0.5rem;
  background-color: ${colors.black.main};
  color: ${colors.white.main};
  border-radius: 0.5rem;
  border: 0.0625rem solid ${colors.white.main};
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
      background-color: ${colors.secondary.normal[300]};
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
    $isOpen &&
    `0.1rem solid ${colors.primary.main}`}; /* change de color with the correct palette */
  border-top: none;
  border-radius: 0 0 0.375rem 0.375rem;
`

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 12.2rem;
  overflow-y: scroll;
  border-radius: 0 0 0.375rem 0.375rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.secondary.normal[300]};
    border-radius: 0.2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.secondary.hover[200]};
  }
`

export const StyledOption = styled.span`
  padding: 1.25rem 1.5rem;
  background-color: ${colors.gray[150]};
  border-bottom: 0.0625rem solid ${colors.secondary.normal[300]};
  color: ${colors.secondary.main};
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${colors.secondary.hover[200]};
    color: ${colors.white.main};
  }
`
