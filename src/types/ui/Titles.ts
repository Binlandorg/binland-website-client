import { PropsWithChildren } from 'react'

export interface IH1Props extends PropsWithChildren {
  $color?: string
}

export interface IH3Props extends PropsWithChildren {
  $weight: 'medium' | 'semibold' | 'bold'
  $color?: string
}

export interface IH4Props extends PropsWithChildren {
  $weight: 'regular' | 'medium' | 'bold'
  $color?: string
}

export interface IH5Props extends IH4Props {}
