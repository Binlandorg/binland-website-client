export interface IServiceFeature {
  icon: React.ReactNode
  title: string
  description: string
}

export interface IWhyService {
  question: string
  answer: string
  image: string
}

export interface IServiceDevelopmentStep {
  id: number
  title: string
  description: string
}

export interface IDevelopmentProcess {
  question: string
  description: string
  steps: Array<IServiceDevelopmentStep>
}

export interface IDeliverableItem {
  id: string
  name: string
}

export interface IDeliverable {
  question: string
  description: string
  items: Array<IDeliverableItem>
}

export interface ITechStack {
  title: string
  description: string
  image: string
}

export interface IServiceHero {
  id: string
  name: string
  description: string
  phraseQuote: string
}
export interface IService extends IServiceHero {
  features: Array<IServiceFeature>
  whyService: IWhyService
  developmentProcess: IDevelopmentProcess
  deliverables: IDeliverable
  techStack: ITechStack
}

export interface IContainerUlTabs {
  $dimension: number
}
