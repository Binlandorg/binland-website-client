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
      alt: 'Imagen del CEO de la compañia, Crhistian Turpo',
    },
    fullName: 'Crhistian Turpo Apaza',
    position: 'CEO',
    quote: 'Quien tiene paciencia, obtendrá lo que desea.',
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
      alt: 'Imagen de uno de los fundadores, Jonathan Cervantes',
    },
    fullName: 'Jonathan M. Alarcón',
    position: 'Full Stack Developer',
    quote:
      'Programa siempre tu código como si el tipo que va a tener que mantenerlo en el futuro fuera un violento psicópata que sabe donde vives.',
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
      alt: 'Imagen de uno de los fundadores, Gustavo Ugarte',
    },
    fullName: 'Gustavo Ugarte',
    position: 'Full Stack Developer',
    quote: 'El fracaso solo es un paso hacia el éxito',
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
      alt: 'Imagen de uno de los fundadores, Ricardo Mamani',
    },
    fullName: 'Ricardo Mamani Calcina',
    position: 'Frontend Developer',
    quote: 'La ocasión hay que crearla, no esperar a que llegue.',
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
