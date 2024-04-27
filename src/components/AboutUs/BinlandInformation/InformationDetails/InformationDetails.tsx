import useIntlMessages from 'hooks/useIntlMessages'
import {
  ContainerDetails,
  ItemDetails,
  Statistics,
} from './InformationDetails.style'
import Reveal from 'components/Reveal/Reveal'
import imageURL from '../../../../assets/images/imgAboutUs/people.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const InformationDetails = () => {
  const intl = useIntlMessages()

  return (
    <ContainerDetails>
      <Reveal classname='reveal'>
        <ItemDetails>
          <Statistics>15K</Statistics>
          <span>{intl('about.us.binland.information.details.clients')}</span>
        </ItemDetails>
      </Reveal>
      <Reveal classname='reveal'>
        <ItemDetails>
          <Statistics>15K</Statistics>
          <span>
            {intl('about.us.binland.information.details.collaborators')}
          </span>
        </ItemDetails>
      </Reveal>
      <Reveal classname='reveal'>
        <ItemDetails>
          <LazyLoadImage src={imageURL} threshold={10} />
        </ItemDetails>
      </Reveal>
      <Reveal classname='reveal'>
        <ItemDetails>
          <Statistics>15K</Statistics>
          <span>{intl('about.us.binland.information.details.services')}</span>
        </ItemDetails>
      </Reveal>
    </ContainerDetails>
  )
}

export default InformationDetails
