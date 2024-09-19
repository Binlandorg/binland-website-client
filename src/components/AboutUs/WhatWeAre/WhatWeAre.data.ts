import visionImg from './../../../assets/images/aboutus-vision.svg'
import missionImg from './../../../assets/images/aboutus-mission.svg'
import valuesImg from './../../../assets/images/aboutus-values.svg'

interface IWhatWeAre {
  id: string
  title: string
  description: string
  img: string
}

export const whatWeAreData: Array<IWhatWeAre> = [
  {
    id: 'mision',
    title: 'about.us.what.we.are.mission.title',
    description: 'about.us.what.we.are.mission.description',
    img: missionImg,
  },
  {
    id: 'vision',
    title: 'about.us.what.we.are.vision.title',
    description: 'about.us.what.we.are.vision.description',
    img: visionImg,
  },
  {
    id: 'values',
    title: 'about.us.what.we.are.values.title',
    description: 'about.us.what.we.are.values.description',
    img: valuesImg,
  },
]
