import fachadaImageURL from '../../../../assets/images/places/aboutus-oficinas-01.webp'
import streetImageURL from '../../../../assets/images/places/aboutus-oficinas-02.webp'
import teamImageURL from '../../../../assets/images/people/aboutus-oficinas-09.webp'
import vrImageURL from '../../../../assets/images/people/aboutus-oficinas-04.webp'
import redgirlImageURL from '../../../../assets/images/people/aboutus-oficinas-05.webp'
import redgirldownImageURL from '../../../../assets/images/people/aboutus-oficinas-06.webp'
import programmergirlImageURL from '../../../../assets/images/people/aboutus-oficinas-07.webp'
import officesImageURL from '../../../../assets/images/places/aboutus-oficinas-08.webp'
import team2ImageURL from '../../../../assets/images/people/aboutus-oficinas-03.webp'
import fachadaImageURLMobile from '../../../../assets/images/places/mobile/aboutus-oficinas-01.webp'
import streetImageURLMobile from '../../../../assets/images/places/mobile/aboutus-oficinas-02.webp'
import teamImageURLMobile from '../../../../assets/images/people/mobile/aboutus-oficinas-09.webp'
import vrImageURLMobile from '../../../../assets/images/people/mobile/aboutus-oficinas-04.webp'
import redgirlImageURLMobile from '../../../../assets/images/people/mobile/aboutus-oficinas-05.webp'
import redgirldownImageURLMobile from '../../../../assets/images/people/mobile/aboutus-oficinas-06.webp'
import programmergirlImageURLMobile from '../../../../assets/images/people/mobile/aboutus-oficinas-07.webp'
import officesImageURLMobile from '../../../../assets/images/places/mobile/aboutus-oficinas-08.webp'
import team2ImageURLMobile from '../../../../assets/images/people/mobile/aboutus-oficinas-03.webp'
import { ICollage } from 'types/components/aboutus'

const collageData: ICollage[] = [
  {
    id: 1,
    url: fachadaImageURL,
    urlMobile: fachadaImageURLMobile,
    alt: 'Fachada de Binland',
    name: 'fachada',
  },
  {
    id: 2,
    url: streetImageURL,
    urlMobile: streetImageURLMobile,
    alt: 'Calle circundante a Binland',
    name: 'street',
  },
  {
    id: 3,
    url: team2ImageURL,
    urlMobile: team2ImageURLMobile,
    alt: 'Un gran ambiente de trabajo y desarrollo',
    name: 'team',
  },
  {
    id: 4,
    url: vrImageURL,
    urlMobile: vrImageURLMobile,
    alt: 'Probando Realidad Virtual',
    name: 'realidad-virtual',
  },
  {
    id: 5,
    url: redgirlImageURL,
    urlMobile: redgirlImageURLMobile,
    alt: 'Cansancio',
    name: 'andrea',
  },
  {
    id: 6,
    url: redgirldownImageURL,
    urlMobile: redgirldownImageURLMobile,
    alt: 'Mucho cansancio',
    name: 'andrea2',
  },
  {
    id: 7,
    url: programmergirlImageURL,
    urlMobile: programmergirlImageURLMobile,
    alt: 'El trabajo no termina',
    name: 'programing',
  },
  {
    id: 8,
    url: officesImageURL,
    urlMobile: officesImageURLMobile,
    alt: 'Nuestras oficinas',
    name: 'offices',
  },
  {
    id: 9,
    url: teamImageURL,
    urlMobile: teamImageURLMobile,
    alt: 'Reunion de lluvia de ideas',
    name: 'team2',
  },
]

export default collageData
