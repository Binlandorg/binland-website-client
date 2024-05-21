import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SocialMediaWrapper } from './SocialMedia.styles'
import { TbBrandTwitter } from 'react-icons/tb'

interface SocialLinks {
  id: string
  to: string
  icon: React.ReactNode
}

const ICON_SIZE = 24

const socialLinksIcons: SocialLinks[] = [
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
    to: 'twitter.com/BinlandDev',
    icon: <TbBrandTwitter size={ICON_SIZE} />,
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
