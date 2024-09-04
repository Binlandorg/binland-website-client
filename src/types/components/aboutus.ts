import { PropsWithChildren } from "react"

export interface IName {
  name : string
}

export interface INetwork extends IName{
  url: string
  ariaLabel: string
}

export interface IFoundersData{
  id?: string
  image: {
    url: string
    urlMobile: string
    alt: string
  }
  fullName: string
  position: string
  quote: string
  networks?: INetwork[]
}
export interface ITeamData extends IFoundersData{}

export interface IProfileCard extends IFoundersData{}

export interface IDescription {
  subTitle: string
  title: string
}

export interface ITitle extends PropsWithChildren{
  title: string
  titlePosition: 'left' | 'right'
  description?: IDescription | undefined
}

export interface ICollage {
  id: number
  url: string
  urlMobile: string
  alt: string
  name: string
}

export interface IDetailData {
  id: number
  amount: string
  name: string
}