export interface IData {
  selected: number
}

export interface IBrand {
  id: string
  src: string
  name: string
}

export interface IClientCard {
  id: string
  image: string
  name: string
  description: string
  to: string
}

type Page = IClientCard[]

export interface IClientsData extends Array<Page> {}
