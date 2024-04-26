import {
  StyledCollaboratorsSection,
  CollaboratorsItem,
  CollaboratorsContent,
  CollaboratorsContainer,
  CollaboratorsList,
} from './Collaborators.styles'
import useIntlMessages from 'hooks/useIntlMessages'
import ProfileCard from 'components/Cards/ProfileCard/ProfileCard'

const collaboratorsData = [
  {
    image:'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
    fullName: 'Crhistian Turpo',
    position: 'Designer',
    quote:
      '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
    networks: [
      {
        name: 'GitHub',
        url: 'https://github.com/margarita.g',
      },
    ],
  },

  {
    image:'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
    fullName: 'Margarita G.',
    position: 'Data Science Manager',
    quote:
      '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
    networks: [
      {
        name: 'GitHub',
        url: 'https://github.com/margarita.g',
      },
    ],
  },
]

type Network = {
  name: 'github'| 'personalpage'
  url: string
}

export const Collaborators = () => {
  const intl = useIntlMessages()

  return (
    <StyledCollaboratorsSection
      title={intl('about.us.founders.title')}
      titlePosition="right"
    >
      <CollaboratorsContent>
        <CollaboratorsContainer size="xl">
          <CollaboratorsList>
            {
              collaboratorsData.map((collaborator, id) => {
                const { image, fullName, position, quote, networks } = collaborator
                return (
                  <CollaboratorsItem key={id}>
                    <ProfileCard
                      image={image}
                      fullName={fullName}
                      position={position}
                      quote={quote}
                      networks={networks as Network[]}
                    />
                  </CollaboratorsItem>
                )
              })
            }
          </CollaboratorsList>
        </CollaboratorsContainer>
      </CollaboratorsContent>
    </StyledCollaboratorsSection>
  )
}

export default Collaborators
