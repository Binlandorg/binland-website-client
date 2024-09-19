import useIntlMessages from 'hooks/useIntlMessages'
import H3 from 'ui/Titles/H3'
import { CardWrapper, WhatWeAreImg } from './WhatWeAreCard.styles'
import { IWhatWeAre } from 'types/ui/cards'

const WhatWeAreCard: React.FC<IWhatWeAre> = (props) => {
  const intl = useIntlMessages()
  return (
    <CardWrapper>
      <div className="info">
        <H3 $weight="bold">{intl(props.title).toUpperCase()}</H3>
        <p className="mision__description">{intl(props.description)}</p>
      </div>
      <WhatWeAreImg
        width={props.img.width}
        height={props.img.height}
        src={props.img.src}
        alt={props.title}
      />
    </CardWrapper>
  )
}

export default WhatWeAreCard
