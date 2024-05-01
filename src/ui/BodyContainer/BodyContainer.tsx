import { PropsWithChildren } from 'react'

import { StyledBodyContainer } from './BodyContainer.styles'

interface IBodyContainer extends PropsWithChildren {}

const BodyContainer: React.FC<IBodyContainer> = ({ children }) => {
  return <StyledBodyContainer>{children}</StyledBodyContainer>
}

export default BodyContainer
