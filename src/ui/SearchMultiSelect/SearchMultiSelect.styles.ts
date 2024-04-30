import styled from 'styled-components'

import { colors } from 'styles/colors'

export const InputSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.gray[150]};
  padding: 0.5rem 1rem;
  border-top: 0.125rem solid ${colors.secondary.normal[300]};
  border-bottom: 0.125rem solid ${colors.secondary.normal[300]};

  ::placeholder {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: ${colors.secondary.main};
    opacity: 0.5;
  }

  .icon-search {
    color: ${colors.secondary.normal[300]};
  }
`

export const StyledInputSearch = styled.input`
  width: 100%;
  border: none;
  background: none;
  padding: 0.5rem;

  &:active,
  &:focus {
    outline: none;
  }
`
