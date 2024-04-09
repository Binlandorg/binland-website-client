import { TbExternalLink } from 'react-icons/tb'

import H3 from 'ui/Titles/H3'
import { ServicesData } from '../ServicesData'
import Section from 'ui/Section/Section'
import {
  ContainerServices,
  ServiceContentWrapper,
  ServiceInfoWrapper,
  ServiceLink,
  ServiceLinksWrapper,
} from './ServicesContent.styles'

const ServicesContent: React.FC = () => {
  return (
    <Section type="margin" size="lg">
      <ContainerServices size="xl" isfullwidth>
        {ServicesData.map((service, index) => (
          <ServiceContentWrapper key={service.id} index={index}>
            {(index + 1) % 2 === 0 ? (
              <>
                <ServiceLinksWrapper>
                  {service.services.map((service) => (
                    <ServiceLink
                      key={service.name}
                      to={service.to}
                      className="service-link"
                    >
                      <span>{service.name}</span>
                      <TbExternalLink size={25} />
                    </ServiceLink>
                  ))}
                </ServiceLinksWrapper>
                <ServiceInfoWrapper>
                  <H3 weight="semibold">{service.title}</H3>
                  <p className="service__description">{service.description}</p>
                </ServiceInfoWrapper>
              </>
            ) : (
              <>
                <ServiceInfoWrapper>
                  <H3 weight="semibold">{service.title}</H3>
                  <p className="service__description">{service.description}</p>
                </ServiceInfoWrapper>
                <ServiceLinksWrapper>
                  {service.services.map((service) => (
                    <ServiceLink
                      key={service.name}
                      to={service.to}
                      className="service-link"
                    >
                      <span>{service.name}</span>
                      <TbExternalLink size={25} />
                    </ServiceLink>
                  ))}
                </ServiceLinksWrapper>
              </>
            )}
          </ServiceContentWrapper>
        ))}
      </ContainerServices>
    </Section>
  )
}

export default ServicesContent
