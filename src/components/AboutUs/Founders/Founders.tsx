import ProfileCard from "components/Cards/ProfileCard/ProfileCard"
import Reveal from "components/Reveal/Reveal"
import useIntlMessages from "hooks/useIntlMessages"
import type { IFoundersData } from "types/components/aboutus"
import foundersData from "./Founders.data"
import {
	FoundersContent,
	FoundersItem,
	FoundersList,
	StyledFoundersSection,
} from "./Founders.styles"

const Founders: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<StyledFoundersSection
			title={intl("about.us.founders.title")}
			titlePosition="left"
		>
			<FoundersContent>
				<FoundersList>
					{foundersData?.map((founder) => {
						const {
							id,
							image,
							fullName,
							position,
							quote,
							networks,
						}: IFoundersData = founder
						return (
							<FoundersItem key={id}>
								<Reveal>
									<ProfileCard
										image={image}
										fullName={fullName}
										position={position}
										quote={quote}
										networks={networks}
									/>
								</Reveal>
							</FoundersItem>
						)
					})}
				</FoundersList>
			</FoundersContent>
		</StyledFoundersSection>
	)
}

export default Founders
