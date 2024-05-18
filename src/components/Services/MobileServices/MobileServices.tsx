import SingleMobileService from './SingleMobileService/SingleMobileService'
import { MobileServicesWrapper } from './MobileServices.styles'

interface ITabProperties {
  key: string
  label: string
  children: React.ReactNode
}

interface ITabs {
  items: Array<ITabProperties>
}

const MobileServices: React.FC<ITabs> = ({ items }) => {
  return (
    <MobileServicesWrapper>
      {items.map((item) => {
        return (
          <SingleMobileService
            key={item.key}
            label={item.label}
            children={item.children}
          />
        )
      })}
    </MobileServicesWrapper>
  )
}

export default MobileServices
