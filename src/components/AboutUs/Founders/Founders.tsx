import useIntlMessages from 'hooks/useIntlMessages'
import ProfileCard from 'components/Cards/ProfileCard/ProfileCard'
import foundersData from './Founders.json'
import { IProfileCard } from 'types/components/aboutus'
import {
  FoundersContainer,
  FoundersContent,
  FoundersItem,
  FoundersList,
  StyledFoundersSection,
} from './Founders.styles'

const Founders : React.FC = () => {
  const intl = useIntlMessages()

  return (
    <StyledFoundersSection
      title={intl('about.us.founders.title')}
      titlePosition="left"
    >
      <FoundersContent>
        <FoundersContainer size="xl">
          <FoundersList>
            {
              foundersData?.map((founder) => {
                const { id, image, fullName, position, quote, networks } = founder as IProfileCard
                return (
                  <FoundersItem key={id}>
                    <ProfileCard
                      image={image}
                      fullName={fullName}
                      position={position}
                      quote={quote}
                      networks={networks}
                    />
                  </FoundersItem>
                )
              })
            }
          </FoundersList>
        </FoundersContainer>
      </FoundersContent>
    </StyledFoundersSection>
  )
}

export default Founders
