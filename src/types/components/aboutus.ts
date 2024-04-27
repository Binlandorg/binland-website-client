import { PropsWithChildren } from "react"

export interface IName {
  name : 'github' | 'personalpage' | 'linkedin'
}

export interface INetwork extends IName{
  url: string
}

export interface IProfileCard {
  id?: string
  image: string | './src/assets/images/default.jpg'
  fullName: string
  position: string
  quote: string
  networks?: INetwork[]
}

export interface IDescription {
  subTitle: string
  title: string
}

export interface ITitle extends PropsWithChildren{
  title: string
  titlePosition: 'left' | 'right'
  description?: IDescription | undefined
}