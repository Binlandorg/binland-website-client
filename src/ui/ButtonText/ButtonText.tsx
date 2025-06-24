import type { PropsWithChildren } from "react"

import { ButtonTextWrapper } from "./ButtonText.styles"
import type { Props } from "./ButtonText.types"

type ButtonTextProps = PropsWithChildren & Props

const ButtonText: React.FC<ButtonTextProps> = ({
	children,
	$weight,
	className,
}) => {
	return (
		<ButtonTextWrapper className={className} $weight={$weight}>
			{children}
		</ButtonTextWrapper>
	)
}

export default ButtonText
