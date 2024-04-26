export interface ServiceContentWrapperProps {
  index: number
}

interface IService {
  name: string
  to: string
}

export interface IServiceCategory {
  id: string
  title: string
  description: string
  services: IService[]
}
