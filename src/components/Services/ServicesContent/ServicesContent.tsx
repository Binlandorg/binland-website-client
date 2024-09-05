import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

import useIntlMessages from 'hooks/useIntlMessages'
import H4 from 'ui/Titles/H4'
import { ServiceContentWrapper } from './ServicesContent.styles'

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

const ServiceContent: React.FC<IServiceContent> = (props) => {
  const intl = useIntlMessages()

  return (
    <ServiceContentWrapper>
      <div className="left-content">
        <div className="what-is">
          <H4 $weight="bold">{intl('home.services.content.title.what.is')}</H4>
          <p>{intl(props.description)}</p>
        </div>
        <div className="what-includes">
          <H4 $weight="bold">
            {intl('home.services.content.title.what.includes')}
          </H4>
          <ul className="backlinks-wrapper">
            {props.backlinks.map((backlink) => (
              <li key={intl(backlink.id)}>
                <span>📌</span>
                <p>{intl(backlink.text)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-content">
        <img
          width="280"
          height="178"
          className="service__img"
          src={props.image}
          alt={props.title}
          loading="lazy"
        />
        <a
          href={props.link}
          className="see-more__link"
          aria-label={intl('home.services.content.link.aria.label')}
        >
          <span> {intl('home.services.content.button.see.more')}</span>
          <FaArrowUpRightFromSquare size={24} />
        </a>
      </div>
    </ServiceContentWrapper>
  )
}

export default ServiceContent
