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
  background: ${({ $type }) =>
    $type == 'primary' ? `${colors.primary.main}` : `${colors.white.main}`};
  border: none;
  border-radius: 0.6rem;
  padding: 0.5rem 0.75rem;
  color: ${({ $type }) =>
    $type == 'primary' ? `${colors.white.main}` : `${colors.black.main}`};
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
  border: none;
  color: ${colors.black.main};
  border: 0.0625rem solid ${colors.body};
  border-radius: 1rem;

  li:first-child {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  li:last-child {
    border: none;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
`

export const StyledSelectOption = styled.li<ISelectOption>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  cursor: pointer;
  padding: 1.25rem 1.5rem;
  background-color: ${colors.white.main};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  border-bottom: 0.125rem solid ${colors.body};
  gap: 1rem;

  &:hover {
    background: ${colors.secondary.hover[200]};
    color: ${colors.white.main};
  }

  .point-selected {
    background-color: ${colors.gray[100]};
    height: 1rem;
    width: 1rem;
    border-radius: 100%;
    ${(props) =>
      props.selected &&
      `
        background: ${colors.primary.main};
        border: 0.25rem solid ${colors.gray[100]}
      `}
  }
`
