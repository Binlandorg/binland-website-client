import { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

import Button from "ui/Button/Button"
import Section from "ui/Section/Section"
import Input from "ui/input/Input"
import subscribeImg from "./../../../assets/images/illustrations/subscribe.svg"
import { SubscribeWrapper } from "./Subscribe.styles"

const Subscribe: React.FC = () => {
	const [email, setEmail] = useState("")

	return (
		<Section type="margin" size="sm">
			<SubscribeWrapper size="lg" isfullwidth>
				<div className="subscribe-content">
					<div>
						<h2 className="subscribe-title">Suscríbete</h2>
						<p className="subscribe-description">
							¿ Deseas estar mas pendiente de más artículos ?
						</p>
					</div>
					<div className="subscribe-form">
						<Input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Tu e-mail"
							className="subscribe-input"
						/>
						<Button
							type="primary"
							size="lg"
							className="subscribe-button"
							onClick={() => {}}
						>
							Suscríbete
						</Button>
					</div>
				</div>
				<LazyLoadImage src={subscribeImg} className="subscribe-img" />
			</SubscribeWrapper>
		</Section>
	)
}

export default Subscribe
