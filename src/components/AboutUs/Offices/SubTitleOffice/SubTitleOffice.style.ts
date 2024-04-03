import styled from 'styled-components'
import { colors } from 'styles/colors'

export const ContainerSubTitleOffice = styled.div`
  width: 100%;
  margin: 1.25rem 0;

  & > :first-child {
    font-weight: 500;
    font-size: clamp(1.125rem, 4vw, 1.5625rem);
    line-height: 3rem;
    padding: 0 0.625rem;
    text-transform: uppercase;
    color: ${colors.primary.main};
  }

  & > :nth-child(2) {
    font-weight: 700;
    font-size: clamp(2rem, 4vw, 2.1875rem);
    line-height: 3.125rem;
    padding: 0 0.625rem;
    text-transform: uppercase;
    color: ${colors.black.main};

    .sub-title-point {
      color: ${colors.primary.main};
    }
  }
`
