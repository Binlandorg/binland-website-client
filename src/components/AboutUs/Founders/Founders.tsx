import useIntlMessages from 'hooks/useIntlMessages'
import ProfileCard from 'components/Cards/ProfileCard/ProfileCard'
// import foundersData from './Founders.data'
// import { IFoundersData } from 'types/components/aboutus'
import {
  FoundersContent,
  FoundersItem,
  FoundersList,
  StyledFoundersSection,
} from './Founders.styles'
import Reveal from 'components/Reveal/Reveal'

interface IFounderData {
  id: string
  fullName: string
  position: string
  quote: string
}

interface IFoundersProps {
  founders: IFounderData[]
}

const Founders : React.FC<IFoundersProps> = ({founders}) => {
  const intl = useIntlMessages()

  return (
    <StyledFoundersSection
      title={intl('about.us.founders.title')}
      titlePosition="left"
    >
      <FoundersContent>
        <FoundersList>
          {
            founders?.map((founder) => {
              //const { id, image, fullName, position, quote, networks }: IFoundersData = founder
              const { id, fullName, position, quote }: IFounderData = founder
              return (
                <FoundersItem key={id}>
                  <Reveal>
                    <ProfileCard
                      id={id}
                      fullName={fullName}
                      position={position}
                      quote={quote}
                    />
                  </Reveal>
                </FoundersItem>
              )
            })
          }
        </FoundersList>
      </FoundersContent>
    </StyledFoundersSection>
  )
}

export default Founders
