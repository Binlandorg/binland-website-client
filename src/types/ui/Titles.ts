import { PropsWithChildren } from 'react'

export interface IH2Props extends PropsWithChildren {
  $withDot?: boolean
}

export interface IH3Props extends PropsWithChildren {
  $weight: 'medium' | 'semibold' | 'bold'
}

export interface IH4Props extends PropsWithChildren {
  $weight: 'regular' | 'medium' | 'bold'
}

export interface IH5Props extends IH4Props {}
