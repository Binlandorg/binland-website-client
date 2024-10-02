import { Helmet } from "react-helmet-async"

import TableOfContent from "components/TableOfContent/TableOfContent"
import useIntlMessages from "hooks/useIntlMessages"
import BodyContainer from "ui/BodyContainer/BodyContainer"
import Container from "ui/Container/Container"
import H1 from "ui/Titles/H1"
import H3 from "ui/Titles/H3"
import imageLinkPreview from "../../assets/images/image-link-preview.webp"
import data from "./PrivacyPolicy.data"
import { Hero, PrivacyPolicySection } from "./PrivacyPolicy.styles"

const PrivacyPolicy: React.FC = () => {
	const intl = useIntlMessages()
	const { sectionsData, tableOfContentData } = data

	return (
		<BodyContainer>
			<Helmet prioritizeSeoTags>
				<meta
					name="description"
					lang="es"
					content="Información sobre la gestión de datos personales."
				/>
				<meta
					property="og:description"
					content="Información sobre la gestión de datos personales."
				/>
				<meta property="og:title" content="Política de privacidad" />
				<meta property="og:image" content={imageLinkPreview} />
				<title>{intl("privacy.policy.title.tag")}</title>
			</Helmet>
			<PrivacyPolicySection type="padding" size="sm">
				<Container className="container" size="xl" isfullwidth>
					<Hero>
						<div>
							<H1>{intl("privacy.policy.title")}</H1>
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
									<p>{intl("privacy.policy.last.modified")}</p>
									<p>{intl("privacy.policy.summary")}</p>
								</section>
								{sectionsData?.map(({ id, title, content }, idx) => (
									<section key={id} id={id}>
										<H3 $weight="semibold">{`${idx + 1}. ${intl(title)}`}</H3>
										{typeof content === "string" ? <p>{intl(content)}</p> : null}
										{typeof content === "object" ? (
											<div>
												<p>{intl(content.subContent)}</p>
												<ul>
													{content?.subContentList?.map((item) => (
														<li key={item}>{intl(item)}</li>
													))}
												</ul>
											</div>
										) : null}
									</section>
								))}
							</article>
						</main>
					</div>
				</Container>
			</PrivacyPolicySection>
		</BodyContainer>
	)
}

export default PrivacyPolicy
