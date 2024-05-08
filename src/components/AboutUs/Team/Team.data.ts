import patyImageURL from '../../../assets/images/paty-profile.webp'
import diegoImageURL from '../../../assets/images/diego-profile.webp'
import { ITeamData } from 'types/components/aboutus'

const teamData: ITeamData[] = [
  {
    id: '1',
    image: {
      url: patyImageURL,
      alt: 'image.profile.alt.paty.apaestegui.rodriguez',
    },
    fullName: 'Paty Apaestegui Rodríguez',
    position: 'about.us.position.trainee',
    quote: 'about.us.quote.paty.apaestegui.rodriguez',
    networks: [
      {
        name: 'GitHub',
        url: 'https://github.com/patyapaestegui',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/patyapaestegui/',
      },
    ],
  },
  {
    id: '2',
    image: {
      url: diegoImageURL,
      alt: 'image.profile.alt.diego.lopez.vega',
    },
    fullName: 'Diego López Vega',
    position: 'about.us.position.trainee',
    quote: 'about.us.quote.diego.lopez.vega',
    networks: [
      {
        name: 'GitHub',
        url: 'https://github.com/diegolopex',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/diegolopex/',
      },
    ],
  },
]

export default teamData
