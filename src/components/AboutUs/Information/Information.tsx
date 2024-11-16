import { FormattedMessage } from "react-intl"

import useIntlMessages from "hooks/useIntlMessages"
import { colors } from "styles/colors"
import Container from "ui/Container/Container"
import Paragraph from "ui/Paragraph/Paragraph"
import Section from "ui/Section/Section"
import H3 from "ui/Titles/H3"
import H4 from "ui/Titles/H4"
/** TODO: When there are metrics. **/
// import Reveal from "components/Reveal/Reveal"
// import type { IDetailData } from "types/components/aboutus"
// import Display from "ui/Display/Display"
// import H5 from "ui/Titles/H5"
// import { detailsData } from "./Information.data"
import {
	InformationDescription,
	InformationDetails,
	StyledInformation,
} from "./Information.styles"

const Information: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<Section size="sm" type="margin">
			<Container size="xl" isfullwidth>
				<StyledInformation>
					<InformationDescription>
						<div>
							<H4 $weight="regular" color={colors.primary.main}>
								{intl("about.us.binland.information.sub.title")}
							</H4>
							<H3 $weight="bold">
								{intl("about.us.binland.information.title")}
								<span className="dot">.</span>
							</H3>
						</div>
						<div className="description">
							<FormattedMessage
								id="about.us.binland.information.description"
								defaultMessage={intl("about.us.binland.information.description")}
								values={{ p: (chunks) => <Paragraph>{chunks}</Paragraph> }}
							/>
						</div>
					</InformationDescription>
					<InformationDetails>
						{/** TODO: When there are metrics. **/}
						{/* {detailsData.map((detail) => {
							const { id, amount, name }: IDetailData = detail
							return (
								<div key={id}>
									<Reveal>
										<Display size="md" className="detail-amount">
											{amount}
										</Display>
										<H5 $weight="regular">{intl(name)}</H5>
									</Reveal>
								</div>
							)
						})} */}
						<div className="detail-image" />
					</InformationDetails>
				</StyledInformation>
			</Container>
		</Section>
	)
}

export default Information
