import { AiOutlineGlobal } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"

import useIntlMessages from "hooks/useIntlMessages"
import { colors } from "styles/colors"
import type { IName, IProfileCard } from "types/components/aboutus"
import Paragraph from "ui/Paragraph/Paragraph"
import H4 from "ui/Titles/H4"
import defaultImgURL from "../../../assets/images/default-profile.webp"
import {
	AnchorIcon,
	CardData,
	CardDataContainer,
	CardImage,
	CardImageContainer,
	ProfileData,
	ProfileName,
	ProfileNetwork,
	ProfileNetworks,
	ProfilePosition,
	ProfileQuote,
	StyledProfileCard,
} from "./ProfileCard.styles"

const GetIcon: React.FC<IName> = ({ name }: IName) => {
	switch (name.toLocaleLowerCase()) {
		case "github":
			return <FiGithub />
		case "linkedin":
			return <FaLinkedin />
		default:
			return <AiOutlineGlobal />
	}
}

const ProfileCard: React.FC<IProfileCard> = ({
	image,
	fullName,
	position,
	quote,
	networks,
}: IProfileCard) => {
	const intl = useIntlMessages()

	return (
		<StyledProfileCard>
			<CardImageContainer>
				<picture>
					<source
						srcSet={image.urlMobile ?? defaultImgURL}
						media="(max-width: 1024px)"
					/>
					<CardImage
						src={image.url ?? defaultImgURL}
						alt={intl(image.alt)}
						threshold={200}
						width={200}
						height={200}
					/>
				</picture>
			</CardImageContainer>
			<CardData>
				<CardDataContainer>
					<ProfileData>
						<ProfileName>
							<H4 $weight="bold">{fullName}</H4>
						</ProfileName>
						<ProfilePosition>
							<H4 $weight="medium" color={colors.primary.main}>
								{intl(position)}
							</H4>
						</ProfilePosition>
					</ProfileData>
					<ProfileQuote>
						<Paragraph $style="italic" $weight="regular">
							"{intl(quote)}"
						</Paragraph>
					</ProfileQuote>
					<ProfileNetworks>
						{networks?.map((network) => (
							<ProfileNetwork key={network.name}>
								<AnchorIcon
									href={network.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={intl(network.ariaLabel)}
								>
									<GetIcon name={network.name} />
								</AnchorIcon>
							</ProfileNetwork>
						))}
					</ProfileNetworks>
				</CardDataContainer>
			</CardData>
		</StyledProfileCard>
	)
}

export default ProfileCard
