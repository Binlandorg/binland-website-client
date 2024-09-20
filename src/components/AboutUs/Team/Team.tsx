import ProfileCard from "components/Cards/ProfileCard/ProfileCard"
import Reveal from "components/Reveal/Reveal"
import useIntlMessages from "hooks/useIntlMessages"
import type { ITeamData } from "types/components/aboutus"
import teamData from "./Team.data"
import {
	StyledTeamSection,
	TeamContent,
	TeamItem,
	TeamList,
} from "./Team.styles"

const Team: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<StyledTeamSection
			title={intl("about.us.team.title")}
			titlePosition="right"
		>
			<TeamContent>
				<TeamList>
					{teamData?.map((collaborator) => {
						const {
							id,
							image,
							fullName,
							position,
							quote,
							networks,
						}: ITeamData = collaborator
						return (
							<TeamItem key={id}>
								<Reveal>
									<ProfileCard
										image={image}
										fullName={fullName}
										position={position}
										quote={quote}
										networks={networks}
									/>
								</Reveal>
							</TeamItem>
						)
					})}
				</TeamList>
			</TeamContent>
		</StyledTeamSection>
	)
}

export default Team
