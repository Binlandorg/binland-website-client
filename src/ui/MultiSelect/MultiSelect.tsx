import { useEffect, useRef, useState } from "react"
import { CgChevronDown, CgChevronUp } from "react-icons/cg"

import useOutsideClick from "hooks/useClickOutside"
import useIntlMessages from "hooks/useIntlMessages"
import type { IMultiSelectProps, IServiceOptions } from "types/ui/Multiselect"
import Tag from "ui/Tag/Tag"
import SearchMultiSelect from "../SearchMultiSelect/SearchMultiSelect"
import {
	DisplayOptions,
	InputBox,
	MirroredIcon,
	MultiSelectWrapper,
	OptionsWrapper,
	StyledOption,
	TagsWrapper,
} from "./MultiSelect.styles"

const MultiSelect: React.FC<IMultiSelectProps> = ({
	options,
	onChange,
	searchPlaceholder,
	label,
	value,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [searchTerm, setSearchTerm] = useState<string>("")
	const [suggestions, setSuggestions] = useState<IServiceOptions[]>(options)
	const [selectedServicesSet, setSelectedServicesSet] = useState(new Set())

	const refOptions = useOutsideClick(() => {
		setIsOpen(false)
		setSearchTerm("")
	})
	const inputRef = useRef<HTMLInputElement>(null)
	const intl = useIntlMessages()

	useEffect(() => {
		if (searchTerm.trim() === "") {
			setSuggestions(options)
			return
		}

		const filteredOptions = options.filter((element) =>
			intl(element.name).toLowerCase().includes(searchTerm.toLowerCase()),
		)

		setSuggestions(filteredOptions)
	})

	const handleAddService = (service: IServiceOptions) => {
		const updatedSelectedServices = [...value, service]
		onChange(updatedSelectedServices)
		setSelectedServicesSet(new Set([...selectedServicesSet, service.key]))

		if (inputRef.current !== null) {
			inputRef.current.focus()
		}

		if (updatedSelectedServices.length === suggestions.length) {
			setIsOpen((prev) => !prev)
		}
	}

	const handleRemoveService = (service: IServiceOptions) => {
		const filteredArray = value.filter((ele) => ele.key !== service.key)
		onChange(filteredArray)
		const updatedServices = new Set(selectedServicesSet)
		updatedServices.delete(service.key)
		setSelectedServicesSet(updatedServices)
	}

	const handleTagService = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement
		const iconCloseWrapper = target.closest(".icon-close-wrapper")

		if (iconCloseWrapper) {
			const tagElement = iconCloseWrapper.closest("[data-id]")
			if (tagElement) {
				const id = tagElement.getAttribute("data-id")
				if (id) {
					const service = options.find((option) => option.key === id)
					service && handleRemoveService(service)
				}
			}
		}
	}

	return (
		<MultiSelectWrapper ref={refOptions} $isOpen={isOpen} tabIndex={0}>
			<InputBox
				onClick={() => setIsOpen((prev) => !prev)}
				$isOpen={isOpen}
				$servicesLength={value.length}
			>
				<div className="input-box-wrapper">
					<span className="span-question">{label}</span>
					{isOpen ? (
						<CgChevronUp className="arrow-button" size={20} />
					) : (
						<CgChevronDown className="arrow-button" size={20} />
					)}
				</div>
				{value.length > 0 && (
					<TagsWrapper onClick={handleTagService}>
						{value?.map((service) => (
							<Tag
								key={service.key}
								name={intl(service.name)}
								id={service.key}
							/>
						))}
					</TagsWrapper>
				)}
			</InputBox>
			{isOpen && (
				<DisplayOptions $isOpen={isOpen}>
					<SearchMultiSelect
						ref={inputRef}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder={searchPlaceholder}
						icon={<MirroredIcon className="icon-search" size={24} />}
					/>
					<OptionsWrapper>
						{suggestions?.map((service) => {
							return !selectedServicesSet.has(service.key) ? (
								<StyledOption
									key={service.key}
									onClick={() => handleAddService(service)}
								>
									{intl(service.name)}
								</StyledOption>
							) : null
						})}
					</OptionsWrapper>
				</DisplayOptions>
			)}
		</MultiSelectWrapper>
	)
}

export default MultiSelect
