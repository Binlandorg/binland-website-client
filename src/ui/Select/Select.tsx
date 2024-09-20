import { useEffect, useState } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi"
import useOutsideClick from "../../hooks/useClickOutside"
import {
	StyledSelect,
	StyledSelectOption,
	StyledSelectOptions,
	StyledSelectedValue,
} from "./Select.styles"

/**
 * id: id of the option
 * name: display value when options are visible
 * value: value sent when option is clicked/selected
 */
interface RequiredProperties {
	id: string
	name: string
	value: string
}

interface ISelect {
	options: Array<RequiredProperties>
	position: "left" | "right"
	type?: "primary" | "secondary"
	size?: "sm" | "md" | "lg"
	icon?: React.ReactNode
	placeholder?: string
	selectedId?: string
	onChange: (value: string) => void
}

const Select: React.FC<ISelect> = ({
	options,
	position,
	type = "primary",
	icon,
	placeholder = "Select one option",
	selectedId = "",
	onChange,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [selectedOption, setSelectedOption] = useState<RequiredProperties>(
		{} as RequiredProperties,
	)

	const refOptions = useOutsideClick(() => setIsOpen(false))

	const showOptions = (): void => {
		setIsOpen((prev) => !prev)
	}

	const handleOnChange = (value: string) => {
		onChange(value)
		setSelectedOption(options.filter((language) => language.value === value)[0])
	}

	useEffect(() => {
		if (selectedId) {
			setSelectedOption(
				options.filter((language) => language.id === selectedId)[0],
			)
		}
	}, [selectedId, options])

	return (
		<StyledSelect
			ref={refOptions}
			onClick={showOptions}
			$type={type}
			tabIndex={0}
		>
			<StyledSelectedValue>
				{icon}
				{Object.keys(selectedOption).length
					? selectedOption.value
					: placeholder}
				{isOpen ? <HiChevronUp size={18} /> : <HiChevronDown size={18} />}
			</StyledSelectedValue>
			{isOpen && (
				<StyledSelectOptions $position={position}>
					<ul>
						{options.map((language) => {
							return (
								<StyledSelectOption
									key={language.id}
									onClick={() => handleOnChange(language.value)}
									selected={selectedOption.id === language.id}
								>
									{language.name}
									<div className="point-selected" />
								</StyledSelectOption>
							)
						})}
					</ul>
				</StyledSelectOptions>
			)}
		</StyledSelect>
	)
}

export default Select
