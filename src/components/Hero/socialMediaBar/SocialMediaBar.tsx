import { RiInstagramFill, RiTwitterXFill } from 'react-icons/ri'
import { FaGithub, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa'

import {
  LinkIcon,
  WrapperIcon,
  SocialMediaBarWrapper,
} from './SocialMediaBar.styles'

interface ISocialMediaBar {
  type: 'primary' | 'secondary'
  direction: 'row' | 'column'
}

interface ILinkIcon {
  id: string
  to: string
  icon: React.ReactNode
}

const ICON_SIZE = 22

const SocialLinksIconsBar: ILinkIcon[] = [
  {
    id: '1',
    to: 'github.com/Binlandorg',
    icon: <FaGithub size={ICON_SIZE} />,
  },
  {
    id: '2',
    to: 'www.instagram.com/binland.dev',
    icon: <RiInstagramFill size={ICON_SIZE} />,
  },
  {
    id: '3',
    to: 'www.linkedin.com/company/binland',
    icon: <FaLinkedinIn size={ICON_SIZE} />,
  },
  {
    id: '4',
    to: 'www.youtube.com/@BinlandDev',
    icon: <FaYoutube size={ICON_SIZE} />,
  },
  {
    id: '5',
    to: 'www.tiktok.com/@binland.dev',
    icon: <FaTiktok size={ICON_SIZE} />,
  },
  {
    id: '6',
    to: 'x.com/binlandDev',
    icon: <RiTwitterXFill size={ICON_SIZE} />,
  },
]

const SocialMediaBar: React.FC<ISocialMediaBar> = ({ type, direction }) => {
  return (
    <SocialMediaBarWrapper type={type} direction={direction}>
      {SocialLinksIconsBar.map((element) => (
        <WrapperIcon key={element.id}>
          <LinkIcon
            to={`https://${element.to}`}
            target="_BLANK"
            rel="noopener noreferrer"
          >
            {element.icon}
          </LinkIcon>
        </WrapperIcon>
      ))}
    </SocialMediaBarWrapper>
  )
}

export default SocialMediaBar
