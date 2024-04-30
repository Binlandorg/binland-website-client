import { PropsWithChildren } from 'react'

import { StyledButtonAnchor } from './ButtonAnchor.styles'

interface IButtonAnchorProps extends PropsWithChildren {}

/** Componente created only for launch, there where no button anchor component
 * Delete when contact us page is available again
 */

const ButtonAnchor: React.FC<IButtonAnchorProps> = ({ children }) => {
  return <StyledButtonAnchor type="secondary">{children}</StyledButtonAnchor>
}

export default ButtonAnchor
