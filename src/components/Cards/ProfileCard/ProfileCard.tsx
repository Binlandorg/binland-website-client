import { FiGithub } from 'react-icons/fi'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

import {
  CardData,
  CardDataContainer,
  ProfileName,
  StyledProfileCard,
  ProfilePosition,
  ProfileQuote,
  ProfileNetworks,
  ProfileNetwork,
  AnchorIcon,
  CardImage,
  CardImageContainer,
  ProfileData,
} from './ProfileCard.styles'
import H4 from 'ui/Titles/H4'
import Paragraph from 'ui/Paragraph/Paragraph'
import { IName, IProfileCard } from 'types/components/aboutus'
import defaultImgURL from '../../../assets/images/default-image-profile.webp'
import { colors } from 'styles/colors'

const GetIcon: React.FC<IName> = ({ name } : IName) => {
  switch (name.toLocaleLowerCase()) {
    case 'github':
      return <FiGithub />
    case 'linkedin':
      return <FaLinkedin />
    default:
      return <AiOutlineGlobal />
  }
}

const ProfileCard: React.FC<IProfileCard> = ({
  id,
  image,
  fullName,
  position,
  quote,
  networks,
}: IProfileCard) => {

  return (
    <StyledProfileCard key={id}>
      <CardImageContainer>
        <CardImage
          src={image?.url ?? defaultImgURL}
          // alt={intl(image?.alt ?? '')}
          alt={"algun lado"}
          threshold={200}
        />
      </CardImageContainer>
      <CardData>
        <CardDataContainer>
          <ProfileData>
            <ProfileName>
              <H4 $weight="bold">{fullName}</H4>
            </ProfileName>
            <ProfilePosition>
              <H4 $weight="medium" color={colors.primary.main}>
                {position}
              </H4>
            </ProfilePosition>
          </ProfileData>
          <ProfileQuote>
            <Paragraph $style="italic" $weight="regular">
              "{quote}"
            </Paragraph>
          </ProfileQuote>
          <ProfileNetworks>
            {networks?.map((network, id) => (
              <ProfileNetwork key={id}>
                <AnchorIcon
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
