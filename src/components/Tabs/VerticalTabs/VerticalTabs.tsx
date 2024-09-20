import { useEffect, useState } from "react"

import useIntlMessages from "hooks/useIntlMessages"
import Select from "ui/Select/Select"
import {
	ContentWrapper,
	MobileSelectService,
	SingleTab,
	TabsWrapper,
	VerticalTabsWrapper,
} from "./VerticalTabs.styles"

interface RequiredProperties {
	id: string
	name: string
	value: string
}

interface IVerticalTabs {
	key: string
	label: string
	children: React.ReactNode
}

interface IVerticalTabsProps {
	items: Array<IVerticalTabs>
}

const VerticalTabs: React.FC<IVerticalTabsProps> = ({ items }) => {
	const [currentItemIndex, setCurrentItemIndex] = useState<string>(
		() => items[0].key,
	)
	const [currentContent, setCurrentContent] = useState<React.ReactNode>()

	const intl = useIntlMessages()

	const handleToggle = (index: string) => {
		setCurrentItemIndex(index)
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setCurrentContent(
			items.filter((item) => item.key === currentItemIndex)[0].children,
		)
	}, [currentItemIndex])

	const getOptions = () => {
		const options: Array<RequiredProperties> = []
		for (const item of items) {
			options.push({
				id: item.key,
				name: intl(item.label),
				value: intl(item.label),
			})
		}
		return options
	}

	const handleOnChange = (option: string) => {
		const key = items.filter((item) => intl(item.label) === option)[0].key
		setCurrentItemIndex(key)
	}

	return (
		<VerticalTabsWrapper>
			<TabsWrapper>
				{items.map((item) => {
					return (
						<SingleTab
							key={item.key}
							onClick={() => handleToggle(item.key)}
							className={currentItemIndex === item.key ? "selected" : ""}
						>
							{intl(item.label)}
						</SingleTab>
					)
				})}
			</TabsWrapper>
			<MobileSelectService>
				<Select
					options={getOptions()}
					position="left"
					type="secondary"
					selectedId={currentItemIndex}
					onChange={handleOnChange}
				/>
			</MobileSelectService>
			<ContentWrapper
				className={currentItemIndex === items[0].key ? "top-left-rounded" : ""}
			>
				{currentContent}
			</ContentWrapper>
		</VerticalTabsWrapper>
	)
}

export default VerticalTabs
