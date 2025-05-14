import { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

import agroAmym from "./../../assets/images/brandings/agro-amym-logo.svg"
import naturalEcoFriendly from "./../../assets/images/brandings/naturaleza-ecoamigable-logo.svg"
import oasisRestaurant from "./../../assets/images/brandings/oasis-logo.webp"
import pollosControl from "./../../assets/images/brandings/pollos-control-logo.svg"
import { BrandingsWrapper } from "./Clients.styles"

interface Brand {
	id: number
	src: string
	name: string
}
const Brands: Brand[] = [
	{ id: 1, src: naturalEcoFriendly, name: "naturaleza eco-amigable" },
	{ id: 2, src: oasisRestaurant, name: "Oasis restaurant" },
	{ id: 3, src: pollosControl, name: "Pollos Control" },
	{ id: 4, src: agroAmym, name: "Agro Amym" },
]

const Brandings: React.FC = () => {
	const [brands, setBrands] = useState<Brand[]>([])

	useEffect(() => {
		setBrands(Brands)
	}, [])

	return (
		<BrandingsWrapper>
			{brands.map((brand) => (
				<div className="container-img" key={brand.id}>
					<LazyLoadImage className="branding-img" src={brand.src} alt={brand.name} />
				</div>
			))}
		</BrandingsWrapper>
	)
}

export default Brandings
