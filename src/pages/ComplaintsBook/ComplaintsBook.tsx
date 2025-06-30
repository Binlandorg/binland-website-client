import { Helmet } from "react-helmet-async"

import imageLinkPreview from "assets/images/image-link-preview.webp"
import ComplaintsBookForm from "components/Forms/ComplaintsBookForm/ComplaintsBookForm"
import useIntlMessages from "hooks/useIntlMessages"
import BodyContainer from "ui/BodyContainer/BodyContainer"
import H2 from "ui/Titles/H2"
import H4 from "ui/Titles/H4"
import { data } from "./ComplaintsBook.data"
import { ComplaintsBookFormWrapper, Info } from "./ComplaintsBook.styles"
import { ComplaintsBookDetails } from "./ComplaintsBook.styles"
import { ComplaintsBookSection } from "./ComplaintsBook.styles"

const ComplaintsBook: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<BodyContainer>
			<Helmet prioritizeSeoTags>
				<meta
					name="description"
					lang="en"
					content="Submit your complaints, claims, or suggestions through our Complaint Book form. Your feedback helps us improve our services."
				/>
				<meta
					name="description"
					lang="es"
					content="Envía tus quejas, reclamos o sugerencias a través de nuestro formulario del Libro de Reclamaciones. Tu opinión es importante para seguir mejorando nuestros servicios."
				/>
				<meta property="og:image" content={imageLinkPreview} />
				<title>{intl("complaints.book.tag.head.title")}</title>
			</Helmet>
			<ComplaintsBookSection size="sm" type="margin">
				<ComplaintsBookDetails>
					<H2 withDot>{intl("complaints.book.page.title")}</H2>
					<div className="description">
						<H4 $weight="medium">{intl("complaints.book.description.first")}</H4>
						<H4 $weight="medium">{intl("complaints.book.description.second")}</H4>
					</div>
					<Info>
						{data.map((item) => (
							<div className="item" key={item.label}>
								<H4 $weight="bold">{intl(item.label)}:</H4>
								<H4 $weight="regular">{item.value}</H4>
							</div>
						))}
					</Info>
				</ComplaintsBookDetails>
				<ComplaintsBookFormWrapper>
					<ComplaintsBookForm />
				</ComplaintsBookFormWrapper>
			</ComplaintsBookSection>
		</BodyContainer>
	)
}

export default ComplaintsBook
