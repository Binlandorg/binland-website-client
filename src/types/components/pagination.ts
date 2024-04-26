export interface IData {
  selected: number
}

export interface IPagination {
  child: React.ReactNode
  handlePageClick: (data: IData) => void
  pageCount: number
}
