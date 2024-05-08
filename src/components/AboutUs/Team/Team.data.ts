import patyImageURL from '../../../assets/images/paty-profile.webp'
import diegoImageURL from '../../../assets/images/diego-profile.webp'
import { ITeamData } from 'types/components/aboutus'

const teamData: ITeamData[] = [
  {
    id: '1',
    image: {
      url: patyImageURL,
      alt: 'Colaboradora Paty Apaestegui',
    },
    fullName: 'Paty Apaestegui Rodríguez',
    position: 'Trainee',
    quote: 'No malgastes tu tiempo, pues de esa materia está formada la vida.',
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
      alt: 'Colaborador Diego López',
    },
    fullName: 'Diego López Vega',
    position: 'Trainee',
    quote:
      'Las contraseñas son como la ropa interior. No puedes dejar que nadie la vea, debes cambiarla regularmente y no debes compartirla con extraños.',
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