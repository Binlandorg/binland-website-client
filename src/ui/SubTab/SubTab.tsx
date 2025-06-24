import type { PropsWithChildren } from "react"

import { SubTabWrapper } from "./SubTab.styles"
import type { Props } from "./SubTab.types"

type TabProps = PropsWithChildren & Props

const SubTab: React.FC<TabProps> = ({ children, className, $weight }) => {
	return (
		<SubTabWrapper className={className} $weight={$weight}>
			{children}
		</SubTabWrapper>
	)
}

export default SubTab
