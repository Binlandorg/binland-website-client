import useIntlMessages from 'hooks/useIntlMessages'
import {
  FoundersContainer,
  FoundersContent,
  FoundersItem,
  FoundersList,
  StyledFoundersSection,
} from './Founders.styles'
import ProfileCard from 'components/Cards/ProfileCard/ProfileCard'

const foundersData = [
  {
    image:
      'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
    fullName: 'Margarita G.',
    position: 'Designer',
    quote:
      '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
    networks: [
      {
        name: 'github',
        url: 'https://github.com/margarita.g',
      },
      {
        name: 'PersonalWebSite',
        url: 'https://github.com/margarita.g',
      },
    ],
  },
  {
    image:
      'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
    fullName: 'Margarita G.',
    position: 'Designer',
    quote:
      '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
    networks: [
      {
        name: 'github',
        url: 'https://github.com/margarita.g',
      },
      {
        name: 'personalpage',
        url: 'https://github.com/margarita.g',
      },
    ],
  },
  {
    image:
      'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
    fullName: 'Margarita G.',
    position: 'Data Science Manager',
    quote:
      '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
    networks: [
      {
        name: 'github',
        url: 'https://github.com/margarita.g',
      },
    ],
  },
  {
    image:
      'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
    fullName: 'Margarita G.',
    position: 'Data Science Manager',
    quote:
      '“Hola que tal? Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal”',
    networks: [
      {
        name: 'github',
        url: 'https://github.com/margarita.g',
      },
    ],
  },
]

type Network = {
  name: 'github'| 'personalpage'
  url: string
}

const Founders = () => {
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
              foundersData.map((founder, id) => {
                const { image, fullName, position, quote, networks } = founder
                return (
                  <FoundersItem key={id}>
                    <ProfileCard
                      image={image}
                      fullName={fullName}
                      position={position}
                      quote={quote}
                      networks={networks as Network[]}
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
