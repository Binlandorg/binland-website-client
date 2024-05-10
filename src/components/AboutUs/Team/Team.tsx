import useIntlMessages from 'hooks/useIntlMessages'
import ProfileCard from 'components/Cards/ProfileCard/ProfileCard'
import teamData from './Team.data'
import { ITeamData } from 'types/components/aboutus'
import {
  StyledTeamSection,
  TeamItem,
  TeamContent,
  TeamList,
} from './Team.styles'
import Reveal from 'components/Reveal/Reveal'

const Team: React.FC = () => {
  const intl = useIntlMessages()

  return (
    <StyledTeamSection
      title={intl('about.us.team.title')}
      titlePosition="right"
    >
      <TeamContent>
        <TeamList>
          {
            teamData?.map((collaborator) => {
              const { id, image, fullName, position, quote, networks }: ITeamData = collaborator
              return (
                <TeamItem key={id}>
                  <Reveal>
                    <ProfileCard
                      image={image}
                      fullName={fullName}
                      position={position}
                      quote={quote}
                      networks={networks}
                    />
                  </Reveal>
                </TeamItem>
              )
            })
          }
        </TeamList>
      </TeamContent>
    </StyledTeamSection>
  )
}

export default Team
