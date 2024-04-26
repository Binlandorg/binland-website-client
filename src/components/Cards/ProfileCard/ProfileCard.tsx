import { FiGithub } from 'react-icons/fi'
import { AiOutlineGlobal } from 'react-icons/ai'

import H4 from 'ui/Titles/H4'
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
} from './ProfileCard.styles'

type Network = {
  name: 'github'| 'personalpage'
  url: string
}

interface IProfileCard {
  image: string | './src/assets/images/default.jpg'
  fullName: string
  position: string
  quote: string
  networks?: Network[]
}

const ProfileCard: React.FC<IProfileCard> = ({
  image,
  fullName,
  position,
  quote,
  networks,
}: IProfileCard) => {
  return (
    <StyledProfileCard>
      <CardImageContainer>
        <CardImage src={image} />
      </CardImageContainer>
      <CardData>
        <CardDataContainer>
          <ProfileName><H4 $weight="bold">{fullName}</H4></ProfileName>
          <ProfilePosition><H4 $weight="medium">{position}</H4></ProfilePosition>
          <ProfileQuote><p>{quote}</p></ProfileQuote>
          <ProfileNetworks>
            {
              networks?.map((network, id) => (
                <ProfileNetwork key={id}>
                  <AnchorIcon
                    href={network.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {
                      network.name === 'github'? <FiGithub/> : <AiOutlineGlobal/>
                    }
                  </AnchorIcon>
                </ProfileNetwork>
              ))
            }
          </ProfileNetworks>
        </CardDataContainer>
      </CardData>
    </StyledProfileCard>
  )
}

export default ProfileCard
