import useIntlMessages from 'hooks/useIntlMessages'
import ProfileCard from 'components/Cards/ProfileCard/ProfileCard'
import teamData from './Team.json'
import { IProfileCard } from 'types/components/aboutus'
import {
  StyledTeamSection,
  TeamItem,
  TeamContent,
  TeamContainer,
  TeamList,
} from './Team.styles'

const Team: React.FC = () => {
  const intl = useIntlMessages()

  return (
    <StyledTeamSection
      title={intl('about.us.team.title')}
      titlePosition="right"
    >
      <TeamContent>
        <TeamContainer size="xl">
          <TeamList>
            {
              teamData?.map((collaborator) => {
                const { id, image, fullName, position, quote, networks } = collaborator as IProfileCard
                return (
                  <TeamItem key={id}>
                    <ProfileCard
                      image={image}
                      fullName={fullName}
                      position={position}
                      quote={quote}
                      networks={networks}
                    />
                  </TeamItem>
                )
              })
            }
          </TeamList>
        </TeamContainer>
      </TeamContent>
    </StyledTeamSection>
  )
}

export default Team
