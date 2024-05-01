import { PropsWithChildren } from 'react'
import { WithClassName } from 'types/components/shared'

export interface IDisplayProps extends PropsWithChildren, WithClassName {
  fontStyle?: 'normal' | 'italic' | 'oblique'
  size: 'sm' | 'md' | 'lg'
}
