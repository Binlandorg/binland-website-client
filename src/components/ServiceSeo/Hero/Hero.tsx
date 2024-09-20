import { TbSend } from "react-icons/tb"

import ButtonLink from "ui/ButtonLink/ButtonLink"
import {
	BackgroundSeo,
	ContentHero,
	SectionHero,
	TitleHero,
	WrapperHero,
} from "./Hero.style"

const Hero: React.FC = () => {
	return (
		<BackgroundSeo>
			<SectionHero type="margin" size="xl">
				<WrapperHero size="xl">
					<ContentHero>
						<div>
							<p className="hero-sub-title">El posicionamiento es importante</p>
							<TitleHero>seo</TitleHero>
							<span className="hero-description">
								Un texto bien cool para describir el servicio de manera clara y
								corta para que el cliente entienda, quizás 2 lineas o 3 son
								duficientes.
							</span>
						</div>
						<div>
							<ButtonLink
								type="primary"
								to="/contact-us"
								size="lg"
								className="button-contact-us"
							>
								<span className="button-link-contact-us">Contactanos</span>
								<TbSend size={20} />
							</ButtonLink>
						</div>
					</ContentHero>
				</WrapperHero>
			</SectionHero>
		</BackgroundSeo>
	)
}

export default Hero
