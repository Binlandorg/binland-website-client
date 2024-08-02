import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
  FaTwitch,
} from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { SocialMediaWrapper } from './SocialMedia.styles'
import { ILink } from 'types/ui/Link'

const ICON_SIZE = 24

const socialLinksIcons: ILink[] = [
  { id: '1', to: 'github.com/Binlandorg', icon: <FaGithub size={ICON_SIZE} /> },
  {
    id: '2',
    to: 'www.instagram.com/binland.dev',
    icon: <FaInstagram size={ICON_SIZE} />,
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
    to: 'twitter.com/@BinlandDev',
    icon: <RiTwitterXFill size={ICON_SIZE} />,
  },
  {
    id: '7',
    to: 'www.twitch.tv/binlandtv',
    icon: <FaTwitch size={ICON_SIZE} />,
  },
]

const SocialMedia: React.FC = () => {
  return (
    <SocialMediaWrapper>
      {socialLinksIcons.map((element) => (
        <Link
          key={`social-link-${element.id}`}
          to={`https://${element.to}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link"
        >
          {element.icon}
        </Link>
      ))}
    </SocialMediaWrapper>
  )
}

export default SocialMedia
