import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import { FormattedMessage } from "react-intl"

import useIntlMessages from "hooks/useIntlMessages"
import type { IServiceContent } from "types/components/serviceSection"
import ButtonExternalLink from "ui/ButtonExternalLink/ButtonExternalLink"
import Star from "ui/Icons/Star"
import Paragraph from "ui/Paragraph/Paragraph"
import H4 from "ui/Titles/H4"
import { ServiceContentWrapper } from "./ServicesContent.styles"

const ServiceContent: React.FC<IServiceContent> = (props) => {
	const intl = useIntlMessages()

	return (
		<ServiceContentWrapper>
			<div className="left-content">
				<div className="what-is">
					<H4 $weight="bold">{intl("home.services.content.title.what.is")}</H4>
					<Paragraph>
						<FormattedMessage
							id={props.description}
							defaultMessage={intl(props.description)}
							values={{ b: (chunks) => <b>{chunks}</b> }}
						/>
					</Paragraph>
				</div>
				<div className="what-includes">
					<H4 $weight="bold">{intl("home.services.content.title.what.includes")}</H4>
					<ul className="includes-wrapper">
						{props.includes.map((item) => (
							<li key={intl(item.id)}>
								<span className="icon-star">
									<Star />
								</span>
								<Paragraph>{intl(item.text)}</Paragraph>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="right-content">
				<img
					width="280"
					height="178"
					className="service__img"
					src={props.image}
					alt={intl(props.alt)}
					loading="lazy"
				/>
				<ButtonExternalLink
					href={props.link}
					className="see-more__link"
					aria-label={intl("home.services.content.link.aria.label")}
				>
					{intl("home.services.content.button.see.more")}
					<span className="icon-external-link">
						<FaArrowUpRightFromSquare />
					</span>
				</ButtonExternalLink>
			</div>
		</ServiceContentWrapper>
	)
}

export default ServiceContent
