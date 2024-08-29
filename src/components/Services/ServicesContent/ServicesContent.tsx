// import useIntlMessages from 'hooks/useIntlMessages'

import H4 from 'ui/Titles/H4'
import { ServiceContentWrapper } from './ServicesContent.styles'

interface IBacklink {
  id: string
  href: string
}

interface IServiceContent {
  title?: string
  description: string
  backlinks: IBacklink[]
  image: string
  link: string
}

const ServiceContent: React.FC<IServiceContent> = ({
  description,
  backlinks,
  image,
  link,
  title,
}) => {
  // const intl = useIntlMessages()

  return (
    <ServiceContentWrapper>
      <div className="right-content">
        <div>
          <H4 $weight="bold">¿Qué es?</H4>
          <p>{description}</p>
        </div>
        <div>
          <H4 $weight="bold">¿Qué incluye?</H4>
          <ul>
            {backlinks.map((backlink) => (
              <li key={backlink.id}>
                <a href={backlink.href}>{backlink.href}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="left-content">
        {title && <h1>{title}</h1>}
        <img src={image} alt="Service image" />
        <a href={link} className="see-more-link">
          See more
        </a>
        {/* <SeeMoreButton type="primary" rightIcon={<FaArrowUpRightFromSquare />}>
          {intl('home.services.content.button.see.more')}
        </SeeMoreButton> */}
      </div>
    </ServiceContentWrapper>
  )
}

export default ServiceContent
