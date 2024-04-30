import fachadaImageURL from '../../../../assets/images/aboutus-oficinas-01.webp'
import streetImageURL from '../../../../assets/images/aboutus-oficinas-02.webp'
import teamImageURL from '../../../../assets/images/aboutus-oficinas-09.webp'
import vrImageURL from '../../../../assets/images/aboutus-oficinas-04.webp'
import redgirlImageURL from '../../../../assets/images/aboutus-oficinas-05.webp'
import redgirldownImageURL from '../../../../assets/images/aboutus-oficinas-06.webp'
import programmergirlImageURL from '../../../../assets/images/aboutus-oficinas-07.webp'
import officesImageURL from '../../../../assets/images/aboutus-oficinas-08.webp'
import team2ImageURL from '../../../../assets/images/aboutus-oficinas-03.webp'
import { ICollage } from 'types/components/aboutus'

const collageData: ICollage[] = [
  {
    id: 1,
    url: fachadaImageURL,
    alt: 'Fachada de Binland',
    name: "fachada"
  },
  {
    id: 2,
    url: streetImageURL,
    alt: 'Calle circundante a Binland',
    name: "street"
  },
  {
    id: 3,
    url: team2ImageURL,
    alt: 'Un gran ambiente de trabajo y desarrollo',
    name: "team"
  },
  {
    id: 4,
    url: vrImageURL,
    alt: 'Probando Realidad Virtual',
    name: "realidad-virtual"
  },
  {
    id: 5,
    url: redgirlImageURL,
    alt: 'Cansancio',
    name: "andrea"
  },
  {
    id: 6,
    url: redgirldownImageURL,
    alt: 'Mucho cansancio',
    name: "andrea2"
  },
  {
    id: 7,
    url: programmergirlImageURL,
    alt: 'El trabajo no termina',
    name: "programing"
  },
  {
    id: 8,
    url: officesImageURL,
    alt: 'Nuestras oficinas',
    name: "offices"
  },
  {
    id: 9,
    url: teamImageURL,
    alt: 'Reunion de lluvia de ideas',
    name: "team2"
  },
]

export default collageData
