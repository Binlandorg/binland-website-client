import { whatWeAreData } from './WhatWeAre.data'
import WhatWeAreCard from '../../Cards/WhatWeAreCard/WhatWeAreCard'
import { SectionWhatWeAre, WhatWeAreWrapper } from './WhatWeAre.styles'
import Section from 'ui/Section/Section'
import useIntlMessages from 'hooks/useIntlMessages'

const WhatWeAre: React.FC = () => {
  const intl = useIntlMessages()

  return (
    <SectionWhatWeAre
      title={intl('about.us.what.we.are.title')}
      titlePosition="right"
    >
      <Section type="padding" size="lg">
        <WhatWeAreWrapper>
          {whatWeAreData.map((element) => (
            <WhatWeAreCard key={element.id} {...element} />
          ))}
        </WhatWeAreWrapper>
      </Section>
    </SectionWhatWeAre>
  )
}
export default WhatWeAre
