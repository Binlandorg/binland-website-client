import { PropsWithChildren } from 'react'
import { WithClassName } from 'types/components/shared'

export interface IStyledButton {
  type: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  $isfullwidth?: boolean | undefined
  disabled?: boolean
}

export interface IButton
  extends PropsWithChildren,
    IStyledButton,
    WithClassName {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: (() => void) | undefined
}
