import { useEffect, useRef, useState } from "react"
import { useIntl } from "react-intl"

import Carrousel from "components/Carrousel/Carrousel"
import { testimonials } from "data/testimonials"
import useIntlMessages from "hooks/useIntlMessages"
import useRightGap from "hooks/useRightGap"
import type { LanguageType } from "types/global"
import ButtonText from "ui/ButtonText/ButtonText"
import Paragraph from "ui/Paragraph/Paragraph"
import H2 from "ui/Titles/H2"
import { SectionTestimonials, TestimonialCard } from "./Testimonials.styles"
import { TestimonialsContent, TestimonialsWrapper } from "./Testimonials.styles"

const Testimonials: React.FC = () => {
	const intl = useIntlMessages()
	const locale = useIntl().locale as LanguageType
	const [rightGap, setRightGap] = useState(0)

	const wrapperRef = useRef<HTMLDivElement>(null)
	const rightGapValue = useRightGap("body", wrapperRef)

	useEffect(() => {
		if (!rightGapValue) return

		setRightGap(rightGapValue)
	}, [rightGapValue])

	if (!testimonials.length) return null

	return (
		<SectionTestimonials size="sm" type="margin">
			<TestimonialsWrapper ref={wrapperRef}>
				<H2 withDot>{intl("portfolio.section.testimonials.title")}</H2>
				<TestimonialsContent $rightGap={rightGap}>
					<Carrousel
						items={testimonials.map((testimonial) => (
							<TestimonialCard key={testimonial.id}>
								<div className="top">
									<div className="client">
										<picture>
											<img src={testimonial.client.image} alt={testimonial.client.name} />
										</picture>
										<div className="info">
											<ButtonText>{testimonial.client.name}</ButtonText>
											<span className="position">
												<Paragraph>{testimonial.client.position}</Paragraph>
												<Paragraph>{testimonial.client.company}</Paragraph>
											</span>
										</div>
									</div>
								</div>
								<div className="testimonial">
									<Paragraph>{testimonial.testimonial[locale]}</Paragraph>
								</div>
							</TestimonialCard>
						))}
					/>
				</TestimonialsContent>
			</TestimonialsWrapper>
		</SectionTestimonials>
	)
}

export default Testimonials
