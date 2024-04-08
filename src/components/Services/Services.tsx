import { FormattedMessage } from 'react-intl'

import ContentLayout from 'components/Tabs/ContentLayout/ContentLayout'
import HorizontalTabs from 'components/Tabs/HorizontalTabs/HorizontalTabs'
import VerticalTabs from 'components/Tabs/VerticalTabs/VerticalTabs'
import useIntlMessages from 'hooks/useIntlMessages'
import Container from 'ui/Container/Container'
import {
  ServicesSection,
  CustomSingleWord,
  ServicesTitle,
  ServicesWrapper,
} from './Services.styles'
import MobileServices from './MobileServices/MobileServices'

interface ITabProperties {
  key: string
  label: string
  children: React.ReactNode
}

interface IVerticalTabs {
  key: string
  label: string
  children: React.ReactNode
}

const Services: React.FC = () => {
  const intl = useIntlMessages()

  const subitemsDesign: Array<IVerticalTabs> = [
    {
      key: 'asd',
      label: 'home.services.design.development.of.graphic.pieces',
      children: (
        <ContentLayout>
          <div>Development of graphic pieces</div>
        </ContentLayout>
      ),
    },
    {
      key: '2',
      label: 'home.services.design.branding',
      children: (
        <ContentLayout>
          <div>Branding</div>
        </ContentLayout>
      ),
    },
    {
      key: '3',
      label: 'home.services.design.ux.ui.design',
      children: (
        <ContentLayout>
          <div>UX/UI Design</div>
        </ContentLayout>
      ),
    },
    {
      key: '4',
      label: 'home.services.design.ux.writing',
      children: (
        <ContentLayout>
          <div>UX Writing</div>
        </ContentLayout>
      ),
    },
  ]

  const subItemsSoftwareDevelopment: Array<IVerticalTabs> = [
    {
      key: '1',
      label: 'home.services.software.development.full.stack.applications',
      children: (
        <ContentLayout>
          <div>Full stack applications (the name needs review)</div>
        </ContentLayout>
      ),
    },
    {
      key: '2',
      label: 'home.services.software.development.cross.platform.applications',
      children: (
        <ContentLayout>
          <div>Cross-platform applications</div>
        </ContentLayout>
      ),
    },
    {
      key: '3',
      label: 'home.services.software.development.mobile.development',
      children: (
        <ContentLayout>
          <div>Mobile Development - iOS, Android, Flutter</div>
        </ContentLayout>
      ),
    },
    {
      key: '4',
      label: 'home.services.software.development.ecommerce',
      children: (
        <ContentLayout>
          <div>E-commerce</div>
        </ContentLayout>
      ),
    },
    {
      key: '5',
      label: 'home.services.software.development.cloud.migrations',
      children: (
        <ContentLayout>
          <div>Cloud migrations and infraestructure</div>
        </ContentLayout>
      ),
    },
  ]

  const subItemsDigitalManagement: Array<IVerticalTabs> = [
    {
      key: 'sidm1',
      label: 'home.services.digital.management.seo.optimization',
      children: (
        <ContentLayout>
          <div>SEO Optimization</div>
        </ContentLayout>
      ),
    },
    {
      key: 'sidm2',
      label: 'home.services.digital.management.digital.marketing',
      children: (
        <ContentLayout>
          <div>Digital Marketing</div>
        </ContentLayout>
      ),
    },
  ]

  const items: Array<ITabProperties> = [
    {
      key: '1',
      label: 'home.services.design.title',
      children: <VerticalTabs key={'design1'} items={subitemsDesign} />,
    },
    {
      key: '2',
      label: 'home.services.software.development.title',
      children: (
        <VerticalTabs
          key={'softwaredev1'}
          items={subItemsSoftwareDevelopment}
        />
      ),
    },
    {
      key: '3',
      label: 'home.services.digital.management.title',
      children: (
        <VerticalTabs key={'digitalmana1'} items={subItemsDigitalManagement} />
      ),
    },
  ]

  return (
    <ServicesSection id="clients-section" size="lg" type="margin">
      <ServicesWrapper size="xl" isfullwidth>
        <Container size="sm">
          <ServicesTitle>
            <FormattedMessage
              defaultMessage=""
              id="home.services.title"
              values={{
                service: intl('home.services.title.only.services'),
                b: (str) => <CustomSingleWord>{str}</CustomSingleWord>,
              }}
            />
            <span className="span-point">.</span>
          </ServicesTitle>
        </Container>
        <HorizontalTabs items={items} />
        <MobileServices items={items} />
      </ServicesWrapper>
    </ServicesSection>
  )
}

export default Services
