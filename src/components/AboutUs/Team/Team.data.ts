import patyImageURL from '../../../assets/images/binland/team/paty-profile.webp'
import diegoImageURL from '../../../assets/images/binland/team/diego-profile.webp'
import ricardoImageURL from '../../../assets/images/binland/team/ricardo-profile.webp'
import patyImageURLMobile from '../../../assets/images/binland/team/mobile/paty-profile.webp'
import diegoImageURLMobile from '../../../assets/images/binland/team/mobile/diego-profile.webp'
import ricardoImageURLMobile from '../../../assets/images/binland/team/mobile/ricardo-profile.webp'
import { ITeamData } from 'types/components/aboutus'

const teamData: ITeamData[] = [
  {
    id: '1',
    image: {
      url: patyImageURL,
      urlMobile: patyImageURLMobile,
      alt: 'image.profile.alt.paty.apaestegui.rodriguez',
    },
    fullName: 'Paty Apaestegui Rodríguez',
    position: 'about.us.position.trainee',
    quote: 'about.us.quote.paty.apaestegui.rodriguez',
    networks: [
      {
        name: 'GitHub',
        url: 'https://github.com/patyapaestegui',
        ariaLabel:
          'about.us.paty.apaestegui.rodriguez.social.media.github.aria.label',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/patyapaestegui/',
        ariaLabel:
          'about.us.paty.apaestegui.rodriguez.social.media.linkedin.aria.label',
      },
    ],
  },
  {
    id: '2',
    image: {
      url: diegoImageURL,
      urlMobile: diegoImageURLMobile,
      alt: 'image.profile.alt.diego.lopez.vega',
    },
    fullName: 'Diego López Vega',
    position: 'about.us.position.trainee',
    quote: 'about.us.quote.diego.lopez.vega',
    networks: [
      {
        name: 'GitHub',
        url: 'https://github.com/diegolopex',
        ariaLabel: 'about.us.diego.lopez.vega.social.media.github.aria.label',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/diegolopex/',
        ariaLabel: 'about.us.diego.lopez.vega.social.media.linkedin.aria.label',
      },
    ],
  },
  {
    id: '3',
    image: {
      url: ricardoImageURL,
      urlMobile: ricardoImageURLMobile,
      alt: 'image.profile.alt.ricardo.mamani.calcina',
    },
    fullName: 'Ricardo Mamani Calcina',
    position: 'about.us.position.trainee',
    quote: 'about.us.quote.ricardo.mamani.calcina',
    networks: [
      {
        name: 'github',
        url: 'https://github.com/RicardoC23',
        ariaLabel:
          'about.us.ricardo.mamani.calcina.social.media.github.aria.label',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ricardoc23-developer/',
        ariaLabel:
          'about.us.ricardo.mamani.calcina.social.media.linkedin.aria.label',
      },
    ],
  },
]

export default teamData
