import { IServiceContent } from './ServicesContent/ServicesContent'
import serviceImg from './../../assets/images/service-img.png'

type ServicesContentProps = {
  [key: string]: IServiceContent
}

export const serviceContentData: ServicesContentProps = {
  'grafic-pieces': {
    id: 'grafic-pieces',
    title: 'home.services.design.development.of.graphic.pieces',
    description:
      'home.services.design.development.of.graphic.pieces.description',
    backlinks: [
      { id: '1', text: 'backlinks.grafic-pieces.1' },
      { id: '2', text: 'backlinks.grafic-pieces.2' },
      { id: '3', text: 'backlinks.grafic-pieces.3' },
      { id: '4', text: 'backlinks.grafic-pieces.4' },
      { id: '5', text: 'backlinks.grafic-pieces.5' },
      { id: '6', text: 'backlinks.grafic-pieces.6' },
    ],
    image: serviceImg,
    link: '#',
    category: 'home.services.design.title',
  },
  'brand-development': {
    id: 'brand-development',
    title: 'home.services.design.branding',
    description: 'home.services.design.branding.description',
    backlinks: [
      { id: '1', text: 'backlinks.brand-development.1' },
      { id: '2', text: 'backlinks.brand-development.2' },
      { id: '3', text: 'backlinks.brand-development.3' },
      { id: '4', text: 'backlinks.brand-development.4' },
      { id: '5', text: 'backlinks.brand-development.5' },
      { id: '6', text: 'backlinks.brand-development.6' },
    ],
    image: serviceImg,
    link: '#',
    category: 'home.services.design.title',
  },
  'ux-ui-design': {
    id: 'ux-ui-design',
    title: 'home.services.design.ux.ui.design',
    description: 'home.services.design.ux.ui.design.description',
    backlinks: [
      { id: '1', text: 'backlinks.ux-ui-design.1' },
      { id: '2', text: 'backlinks.ux-ui-design.2' },
      { id: '3', text: 'backlinks.ux-ui-design.3' },
      { id: '4', text: 'backlinks.ux-ui-design.4' },
      { id: '5', text: 'backlinks.ux-ui-design.5' },
      { id: '6', text: 'backlinks.ux-ui-design.6' },
    ],
    image: serviceImg,
    link: '#',
    category: 'home.services.design.title',
  },
  'ux-writer': {
    id: 'uu-writer',
    title: 'home.services.design.ux.writing',
    description: 'home.services.design.ux.writing.description',
    backlinks: [
      { id: '1', text: 'backlinks.ux-writer.1' },
      { id: '2', text: 'backlinks.ux-writer.2' },
      { id: '3', text: 'backlinks.ux-writer.3' },
      { id: '4', text: 'backlinks.ux-writer.4' },
      { id: '5', text: 'backlinks.ux-writer.5' },
      { id: '6', text: 'backlinks.ux-writer.6' },
    ],
    image: serviceImg,
    link: '#',
    category: 'home.services.design.title',
  },
  'web-development': {
    id: 'web-development',
    title: 'home.services.software.development.full.stack.applications',
    description:
      'home.services.software.development.full.stack.applications.description',
    backlinks: [
      { id: '1', text: 'backlinks.web-development.1' },
      { id: '2', text: 'backlinks.web-development.2' },
      { id: '3', text: 'backlinks.web-development.3' },
      { id: '4', text: 'backlinks.web-development.4' },
      { id: '5', text: 'backlinks.web-development.5' },
      { id: '6', text: 'backlinks.web-development.6' },
    ],
    image: serviceImg,
    link: '#',
    category: 'home.services.software.development.title',
  },
  'multiplatform-apps': {
    id: 'multiplatform-apps',
    title: 'home.services.software.development.cross.platform.applications',
    description:
      'home.services.software.development.cross.platform.applications.description',
    backlinks: [
      { id: '1', text: 'backlinks.multiplatform-apps.1' },
      { id: '2', text: 'backlinks.multiplatform-apps.2' },
      { id: '3', text: 'backlinks.multiplatform-apps.3' },
      { id: '4', text: 'backlinks.multiplatform-apps.4' },
      { id: '5', text: 'backlinks.multiplatform-apps.5' },
      { id: '6', text: 'backlinks.multiplatform-apps.6' },
    ],
    image: serviceImg,
    link: '#',
    category: 'home.services.software.development.title',
  },
  'mobile-development': {
    id: 'mobile-development',
    title: 'home.services.software.development.mobile.development',
    description:
      'home.services.software.development.mobile.development.description',
    backlinks: [
      { id: '1', text: 'backlinks.mobile-development.1' },
      { id: '2', text: 'backlinks.mobile-development.2' },
      { id: '3', text: 'backlinks.mobile-development.3' },
      { id: '4', text: 'backlinks.mobile-development.4' },
      { id: '5', text: 'backlinks.mobile-development.5' },
      { id: '6', text: 'backlinks.mobile-development.6' },
    ],
    image: serviceImg,
    link: '/',
    category: 'home.services.software.development.title',
  },
  'e-commerce': {
    id: 'e-commerce',
    title: 'home.services.software.development.ecommerce',
    description: 'home.services.software.development.ecommerce.description',
    backlinks: [
      { id: '1', text: 'backlinks.e-commerce.1' },
      { id: '2', text: 'backlinks.e-commerce.2' },
      { id: '3', text: 'backlinks.e-commerce.3' },
      { id: '4', text: 'backlinks.e-commerce.4' },
      { id: '5', text: 'backlinks.e-commerce.5' },
      { id: '6', text: 'backlinks.e-commerce.6' },
    ],
    image: serviceImg,
    link: '/',
    category: 'home.services.software.development.title',
  },
  'cloud-migration': {
    id: 'cloud-migration',
    title: 'home.services.software.development.cloud.migrations',
    description:
      'home.services.software.development.cloud.migrations.description',
    backlinks: [
      { id: '1', text: 'backlinks.cloud-migration.1' },
      { id: '2', text: 'backlinks.cloud-migration.2' },
      { id: '3', text: 'backlinks.cloud-migration.3' },
      { id: '4', text: 'backlinks.cloud-migration.4' },
      { id: '5', text: 'backlinks.cloud-migration.5' },
      { id: '6', text: 'backlinks.cloud-migration.6' },
    ],
    image: serviceImg,
    link: '#',
    category: 'home.services.software.development.title',
  },
  'seo-optimization': {
    id: 'seo-optimization',
    title: 'home.services.digital.management.seo.optimization',
    description:
      'home.services.digital.management.seo.optimization.description',
    backlinks: [
      { id: '1', text: 'backlinks.seo-optimization.1' },
      { id: '2', text: 'backlinks.seo-optimization.2' },
      { id: '3', text: 'backlinks.seo-optimization.3' },
      { id: '4', text: 'backlinks.seo-optimization.4' },
      { id: '5', text: 'backlinks.seo-optimization.5' },
      { id: '6', text: 'backlinks.seo-optimization.6' },
    ],
    image: serviceImg,
    link: '/',
    category: 'home.services.digital.management.title',
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'home.services.digital.management.digital.marketing',
    description:
      'home.services.digital.management.digital.marketing.description',
    backlinks: [
      { id: '1', text: 'backlinks.digital-marketing.1' },
      { id: '2', text: 'backlinks.digital-marketing.2' },
      { id: '3', text: 'backlinks.digital-marketing.3' },
      { id: '4', text: 'backlinks.digital-marketing.4' },
      { id: '5', text: 'backlinks.digital-marketing.5' },
      { id: '6', text: 'backlinks.digital-marketing.6' },
    ],
    image: serviceImg,
    link: '#',
    category: 'home.services.digital.management.title',
  },
}
