import visionImg from './../../../assets/images/illustrations/aboutus-vision.svg'
import missionImg from './../../../assets/images/illustrations/aboutus-mission.svg'
import valuesImg from './../../../assets/images/illustrations/aboutus-values.svg'
import { IWhatWeAre } from 'types/ui/cards'

export const whatWeAreData: Array<IWhatWeAre> = [
  {
    id: 'mision',
    title: 'about.us.what.we.are.mission.title',
    description: 'about.us.what.we.are.mission.description',
    img: {
      src: missionImg,
      width: 150.3,
      height: 189,
    },
  },
  {
    id: 'vision',
    title: 'about.us.what.we.are.vision.title',
    description: 'about.us.what.we.are.vision.description',
    img: {
      src: visionImg,
      width: 214.31,
      height: 118.63,
    },
  },
  {
    id: 'values',
    title: 'about.us.what.we.are.values.title',
    description: 'about.us.what.we.are.values.description',
    img: {
      src: valuesImg,
      width: 177.4,
      height: 241.56,
    },
  },
]
