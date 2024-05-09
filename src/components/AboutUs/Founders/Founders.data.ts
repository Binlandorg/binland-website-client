import crhisImageURL from '../../../assets/images/chris-profile.webp'
import jonathanImageURL from '../../../assets/images/jonathan-profile.webp'
import gustavoImageURL from '../../../assets/images/gustavo-profile.webp'
import ricardoImageURL from '../../../assets/images/ricardo-profile.webp'
import { IFoundersData } from 'types/components/aboutus'

const founderData: IFoundersData[] = [
  {
    id: '1',
    image: {
      url: crhisImageURL,
      alt: 'image.profile.alt.crhistian.turpo.apaza',
    },
    fullName: 'Crhistian Turpo Apaza',
    position: "about.us.position.ceo",
    quote: 'about.us.quote.christian.turpo.apaza',
    networks: [
      {
        name: 'github',
        url: 'https://github.com/CrhistianT7',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/crhistianturpo/',
      },
      {
        name: 'PersonalWebSite',
        url: 'https://www.andrewturpo.com/',
      },
    ],
  },
  {
    id: '2',
    image: {
      url: jonathanImageURL,
      alt: 'image.profile.alt.jonathan.cervantes.alarcon',
    },
    fullName: 'Jonathan M. Alarcón',
    position: 'about.us.position.full.stack.developer',
    quote: 'about.us.quote.jonathan.cervantes.alarcon',
    networks: [
      {
        name: 'github',
        url: 'https://github.com/mardecera',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mardecerax/',
      },
      {
        name: 'personalpage',
        url: 'https://mardecera.com',
      },
    ],
  },
  {
    id: '3',
    image: {
      url: gustavoImageURL,
      alt: 'image.profile.alt.gustavo.ugarte',
    },
    fullName: 'Gustavo Ugarte',
    position: 'about.us.position.full.stack.developer',
    quote: 'about.us.quote.gustavo.ugarte',
    networks: [
      {
        name: 'github',
        url: 'https://github.com/GustavoUT22',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/gustavougartetorres/',
      },
    ],
  },
  {
    id: '4',
    image: {
      url: ricardoImageURL,
      alt: 'image.profile.alt.ricardo.mamani.calcina',
    },
    fullName: 'Ricardo Mamani Calcina',
    position: 'about.us.position.frontend.developer',
    quote: 'about.us.quote.ricardo.mamani.calcina',
    networks: [
      {
        name: 'github',
        url: 'https://github.com/RicardoC23',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ricardoc23-developer/',
      },
    ],
  },
]

export default founderData
