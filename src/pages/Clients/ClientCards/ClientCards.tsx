import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"

import type { IClientCard } from "types/components/clients"
import { CardsWrapper } from "./ClientCards.styles"
import { CardWrapper, ExternalLink } from "./ClientCards.styles"

const ClientItems: React.FC<{ currentItems: IClientCard[] }> = ({
	currentItems,
}) => {
	return (
		<CardsWrapper size="xl">
			{currentItems?.map((item) => (
				<CardWrapper key={item.id}>
					<div className="img-wrapper">
						<LazyLoadImage src={item.image} className="img-card" />
						<Link to={`${item.to}`} className="external-link" target="_BLANK">
							<ExternalLink size={40} />
						</Link>
					</div>
					<h3 className="client-name">{item.name}</h3>
					<p className="client-description">{item.description}</p>
				</CardWrapper>
			))}
		</CardsWrapper>
	)
}

export default ClientItems
