import { PropsWithChildren } from 'react'

export interface IDisplayProps extends PropsWithChildren {
  fontStyle?: 'normal' | 'italic' | 'oblique'
  size: 'sm' | 'md' | 'lg'
}
