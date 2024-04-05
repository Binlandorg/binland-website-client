import styled from 'styled-components'

import { colors } from 'styles/colors'
import Container from 'ui/Container/Container'

export const ContainerItems = styled(Container)`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  gap: 3rem;
  min-height: 57.5rem;

  .container-paginate {
    display: flex;
    gap: 1rem;
  }

  .break-li-link {
    list-style: none;
    display: grid;
    place-content: center;
  }

  .break-link {
    color: ${colors.secondary.selected};
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.875rem;
    text-align: center;
    cursor: pointer;
    width: 1.875rem;
    height: 1.875rem;
  }

  .disabled-previous-next {
    color: ${colors.secondary.selected};
  }

  .paginate-li {
    list-style: none;
    background-color: ${colors.secondary.selected};
    color: ${colors.secondary.main};
    display: grid;
    place-content: center;
    width: 1.875rem;
    height: 1.875ren;
    border-radius: 50%;
    cursor: pointer;
  }

  .paginate-li:not(.disabled-previous-next):not(.page-active):hover {
    background-color: ${colors.secondary.hover};
  }

  .page-active {
    background: ${colors.primary.main};
    scale: 1.33;
    color: ${colors.white.main};
  }

  .paginate-link {
    display: grid;
    place-content: center;
    width: 1.875rem;
    height: 1.875rem;
  }

  .paginate-li-next,
  .paginate-li-previous {
    list-style: none;
    cursor: pointer;
  }

  .previous-link,
  .next-link {
    display: grid;
    place-content: center;
    width: 1.5rem;
    height: 1.5rem;
  }
`
