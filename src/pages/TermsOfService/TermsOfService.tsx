import { Helmet } from "react-helmet-async"

import TableOfContent from "components/TableOfContent/TableOfContent"
import useIntlMessages from "hooks/useIntlMessages"
import BodyContainer from "ui/BodyContainer/BodyContainer"
import Container from "ui/Container/Container"
import H1 from "ui/Titles/H1"
import H3 from "ui/Titles/H3"
import imageLinkPreview from "../../assets/images/image-link-preview.webp"
import { Hero, TermsOfServiceSection } from "./TermsOfService.styles"
import data from "./TermsOfServices.data"

const TermsOfService: React.FC = () => {
	const intl = useIntlMessages()
	const { sectionsData, tableOfContentData } = data

	return (
		<BodyContainer>
			<Helmet prioritizeSeoTags>
				<meta
					name="description"
					lang="en"
					content="Details on the use of our services."
				/>
				<meta
					name="description"
					lang="es"
					content="Detalles sobre el uso de nuestros servicios."
				/>
				<meta property="og:image" content={imageLinkPreview} />
				<title>{intl("terms.of.service.title.tag")}</title>
			</Helmet>
			<TermsOfServiceSection type="padding" size="sm">
				<Container className="container" size="xl" isfullwidth>
					<Hero>
						<div>
							<H1>{intl("terms.of.service.title")}</H1>
						</div>
					</Hero>
					<div className="content__wrapper">
						<aside>
							<TableOfContent
								items={tableOfContentData}
								className="table-of-content"
							/>
						</aside>
						<main>
							<article>
								<section>
									<p>{intl("terms.of.service.last.modified")}</p>
									<p>{intl("terms.of.service.summary")}</p>
								</section>
								{sectionsData?.map(({ id, title, content }, idx) => (
									<section key={id} id={id}>
										<H3 $weight="semibold">{`${idx + 1}. ${intl(title)}`}</H3>
										<p>{intl(content)}</p>
									</section>
								))}
							</article>
						</main>
					</div>
				</Container>
			</TermsOfServiceSection>
		</BodyContainer>
	)
}

export default TermsOfService
