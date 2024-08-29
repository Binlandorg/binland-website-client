import styled from 'styled-components'

import { colors } from 'styles/colors'

export const ServiceContentWrapper = styled.div`
  .right-content {
    display: flex;
    width: 100%;
  }

  .left-content {
    display: flex;
    width: 100%;
  }

  .see-more-button {
    background-color: ${colors.primary.main};
    color: ${colors.white.main};
  }
`
