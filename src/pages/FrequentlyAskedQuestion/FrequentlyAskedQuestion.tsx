import { Helmet } from "react-helmet-async"

import FaqCard from "components/FaqCard/FaqCard"
import StillHaveQuestion from "components/StillHaveQuestion/StillHaveQuestion"
import useIntlMessages from "hooks/useIntlMessages"
import BodyContainer from "ui/BodyContainer/BodyContainer"
import H1 from "ui/Titles/H1"
import imageLinkPreview from "../../assets/images/image-link-preview.webp"
import { questions } from "./FrequentlyAskedQuestion.data"
import {
	ContainerFaq,
	FaqQuestionsWrapper,
	SectionFAQ,
	TitleWrapper,
} from "./FrequentlyAskedQuestion.style"

const FrequenltyAskedQuestion = () => {
	const intl = useIntlMessages()

	return (
		<BodyContainer>
			<Helmet prioritizeSeoTags>
				<meta
					name="description"
					lang="en"
					content="Clarify your most frequently asked questions."
				/>
				<meta
					name="description"
					lang="es"
					content="Aclara tus dudas mas frecuentes."
				/>
				<meta property="og:image" content={imageLinkPreview} />
				<title>{intl("frequently.asked.questions.title.tag")}</title>
			</Helmet>
			<SectionFAQ id="frequently-asked-questions" size="lg" type="margin">
				<ContainerFaq size="xl">
					<TitleWrapper>
						<H1>{intl("frequently.asked.questions.title")}</H1>
					</TitleWrapper>
					<FaqQuestionsWrapper size="sm">
						{questions.map((question) => {
							return (
								<FaqCard
									key={question.id}
									question={intl(question.question)}
									answer={intl(question.answer)}
								/>
							)
						})}
						<StillHaveQuestion />
					</FaqQuestionsWrapper>
				</ContainerFaq>
			</SectionFAQ>
		</BodyContainer>
	)
}

export default FrequenltyAskedQuestion
