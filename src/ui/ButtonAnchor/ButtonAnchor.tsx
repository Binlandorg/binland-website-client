import { PropsWithChildren } from 'react'
import Button from 'ui/Button/Button'

interface IButtonAnchorProps extends PropsWithChildren {}

const ButtonAnchor: React.FC<IButtonAnchorProps> = ({ children }) => {
  return <Button type="secondary">{children}</Button>
}

export default ButtonAnchor
