interface IService {
  name: string
  to: string
}

interface IServiceCategory {
  id: string
  title: string
  description: string
  services: IService[]
}

export const ServicesData: IServiceCategory[] = [
  {
    id: '1',
    title: 'Diseño',
    description:
      'Nuestro servicio de diseño personalizado convierte tus ideas en realidad visual. Desde la creación de marcas hasta mejoras en productos, nuestros expertos están aquí para dar vida a tus proyectos con creatividad y funcionalidad.',
    services: [
      { name: 'Diseño UX/UI', to: 'services/diseno-ux-ui' },
      { name: 'Branding', to: 'services/branding' },
      { name: 'UX Writing', to: 'services/ux-writing' },
      { name: 'Diseño Gráfico', to: 'services/graphic design' },
    ],
  },
  {
    id: '2',
    title: 'Desarrollo de Software',
    description:
      'Nuestro servicio de desarrollo de software crea soluciones personalizadas que impulsan el crecimiento de tu negocio. Trabajamos contigo para optimizar procesos, mejorar la eficiencia y brindar una experiencia excepcional a tus usuarios',
    services: [
      { name: 'E-commerce', to: 'services/e-commerce' },
      { name: 'Cloud migrations', to: 'services/cloud-migrations' },
      { name: 'Desarrollo mobile', to: 'services/mobile-development' },
      {
        name: 'Apps completas',
        to: 'services/full-stack-aplications',
      },
      {
        name: 'Apps multiplataforma',
        to: 'services/cross-platform-applications',
      },
    ],
  },
  {
    id: '3',
    title: 'Gestión Digital',
    description:
      'Nuestro servicio de gestión digital optimiza tus procesos con soluciones tecnológicas avanzadas. Desde la automatización hasta la seguridad de datos, trabajamos contigo para impulsar la eficiencia y el éxito de tu negocio en el mundo digital.',
    services: [
      { name: 'Mkt Digital', to: 'services/digital-marketing' },
      { name: 'Optimización SEO', to: 'services/seo-optimization' },
    ],
  },
]
