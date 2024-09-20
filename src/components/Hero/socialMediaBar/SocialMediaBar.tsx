import {
	FaGithub,
	FaLinkedinIn,
	FaTiktok,
	FaTwitch,
	FaYoutube,
} from "react-icons/fa"
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri"

import useIntlMessages from "hooks/useIntlMessages"
import {
	LinkIcon,
	SocialMediaBarWrapper,
	WrapperIcon,
} from "./SocialMediaBar.styles"

interface ISocialMediaBar {
	type: "primary" | "secondary"
	direction: "row" | "column"
}

interface ILinkIcon {
	id: string
	to: string
	icon: React.ReactNode
	ariaLabel: string
}

const ICON_SIZE = 20

const SocialLinksIconsBar: ILinkIcon[] = [
	{
		id: "1",
		to: "github.com/Binlandorg",
		icon: <FaGithub size={ICON_SIZE} />,
		ariaLabel: "home.hero.social.media.github.aria.label",
	},
	{
		id: "2",
		to: "www.linkedin.com/company/binland",
		icon: <FaLinkedinIn size={ICON_SIZE} />,
		ariaLabel: "home.hero.social.media.linkedin.aria.label",
	},
	{
		id: "3",
		to: "www.instagram.com/binland.dev",
		icon: <RiInstagramFill size={ICON_SIZE} />,
		ariaLabel: "home.hero.social.media.instagram.aria.label",
	},
	{
		id: "4",
		to: "www.youtube.com/@BinlandDev",
		icon: <FaYoutube size={ICON_SIZE} />,
		ariaLabel: "home.hero.social.media.youtube.aria.label",
	},
	{
		id: "5",
		to: "www.tiktok.com/@binland.dev",
		icon: <FaTiktok size={ICON_SIZE} />,
		ariaLabel: "home.hero.social.media.tiktok.aria.label",
	},
	{
		id: "6",
		to: "x.com/binlandDev",
		icon: <RiTwitterXFill size={ICON_SIZE} />,
		ariaLabel: "home.hero.social.media.twitter.aria.label",
	},
	{
		id: "7",
		to: "www.twitch.tv/binlandtv",
		icon: <FaTwitch size={ICON_SIZE} />,
		ariaLabel: "home.hero.social.media.twitch.aria.label",
	},
]

const SocialMediaBar: React.FC<ISocialMediaBar> = ({ type, direction }) => {
	const intl = useIntlMessages()

	return (
		<SocialMediaBarWrapper type={type} direction={direction}>
			{SocialLinksIconsBar.map((element) => (
				<WrapperIcon key={element.id}>
					<LinkIcon
						to={`https://${element.to}`}
						target="_BLANK"
						rel="noopener noreferrer"
						aria-label={intl(element.ariaLabel)}
					>
						{element.icon}
					</LinkIcon>
				</WrapperIcon>
			))}
		</SocialMediaBarWrapper>
	)
}

export default SocialMediaBar
