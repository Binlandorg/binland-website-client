export interface IBacklink {
  id: string
  text: string
}

export interface IServiceContent {
  id: string
  title: string
  description: string
  backlinks: IBacklink[]
  image: string
  link: string
  category: string
}

export type ServicesContentProps = {
  [key: string]: IServiceContent
}
