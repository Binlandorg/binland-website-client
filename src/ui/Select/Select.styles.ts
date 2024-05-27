import styled from 'styled-components'
import { colors } from 'styles/colors'

interface ISelectOption {
  selected: boolean
}

interface IPosition {
  $position: 'left' | 'right'
}

export const StyledSelect = styled.div<{ $type: string }>`
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  background-color: ${({ $type }) =>
    $type == 'primary' ? `${colors.primary.main}` : `${colors.white.main}`};
  border: none;
  border-radius: 0.6rem;
  padding: 0.5rem 0.75rem;
  color: ${({ $type }) =>
    $type == 'primary' ? `${colors.white.main}` : `${colors.black.main}`};

  &:hover {
    background-color: ${({ $type }) =>
      $type == 'primary'
        ? `${colors.primary.active[400]}`
        : `${colors.secondary.active[950]}`};
  }

  &:active {
    background-color: ${({ $type }) =>
      $type == 'primary'
        ? `${colors.primary.active[600]}`
        : `${colors.secondary.active[800]}`};
  }

  &:focus-visible {
    outline-offset: 0.125rem;
    outline: 0.125rem solid
      ${({ $type }) =>
        $type == 'primary'
          ? `${colors.primary.main}`
          : `${colors.secondary.main}`};
  }
`

export const StyledSelectedValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledSelectOptions = styled.div<IPosition>`
  position: absolute;
  top: 3rem;
  ${(props) => (props.$position == 'left' ? 'left: 0;' : 'right: 0;')}
  min-width: 12.5rem;
  max-width: 21.875rem;
  color: ${colors.black.main};
  border: 1px solid ${colors.tertiary.normal[200]};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  background-color: ${colors.white.main};
  overflow: hidden;

  & li:not(:last-child) {
    border-bottom: 1px solid ${colors.tertiary.normal[200]};
  }

  &:active {
    border-color: ${colors.tertiary.active[300]};
  }
`

export const StyledSelectOption = styled.li<ISelectOption>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  cursor: pointer;
  padding: 1.25rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  gap: 1rem;

  &:hover {
    background-color: ${colors.tertiary.hover[200]};
  }

  &:hover .point-selected {
    border-color: ${colors.tertiary.hover[300]};
    background-color: ${({ selected }) =>
      !selected && colors.tertiary.hover[300]};
  }

  &:active {
    background-color: ${colors.tertiary.active[300]};
  }

  &:active .point-selected {
    border-color: ${colors.tertiary.active[400]};
    background-color: ${({ selected }) =>
      !selected && colors.tertiary.active[400]};
  }

  .point-selected {
    border: 0.25rem solid ${colors.tertiary.normal[200]};
    height: 1rem;
    width: 1rem;
    border-radius: 100%;
    background-color: ${({ selected }) =>
      selected ? colors.primary.main : colors.tertiary.normal[200]};
  }
`
