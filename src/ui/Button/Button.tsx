import { StyledButton } from './Button.styles'
import { IButton } from 'types/ui/Button'

const Button: React.FC<IButton> = ({
  size = 'md',
  children,
  leftIcon,
  rightIcon,
  $isfullwidth,
  className,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      disabled={disabled}
      size={size}
      $isfullwidth={$isfullwidth}
      className={className}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  )
}

export default Button
