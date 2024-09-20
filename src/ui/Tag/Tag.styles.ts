import styled from "styled-components"

import { colors } from "styles/colors"

export const TagStyled = styled.div`
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
