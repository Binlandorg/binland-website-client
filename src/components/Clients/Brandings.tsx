import { useEffect, useState } from 'react'

import naturalEcoFriendly from './../../assets/images/brandings/imagotipo-horizontal.svg'
import oasisRestaurant from './../../assets/images/brandings/oasis-restaurant.webp'
import { BrandingsWrapper } from './Clients.styles'

interface Brand {
  id: number
  src: string
  name: string
}
const Brands: Brand[] = [
  { id: 1, src: naturalEcoFriendly, name: 'naturaleza eco-amigable' },
  { id: 2, src: oasisRestaurant, name: 'Oasis restaurant' },
]

const Brandings: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([])

  useEffect(() => {
    setBrands(Brands)
  }, [])

  return (
    <BrandingsWrapper>
      {brands.map((brand) => (
        <img
          key={brand.id}
          className="branding-img"
          src={brand.src}
          alt={brand.name}
        />
      ))}
    </BrandingsWrapper>
  )
}

export default Brandings
