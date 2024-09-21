import { forwardRef } from "react"

import type { ISearch } from "types/ui/SearchMultiSelect"
import {
	InputSearchWrapper,
	StyledInputSearch,
} from "./SearchMultiSelect.styles"

const SearchMultiSelect = forwardRef<HTMLInputElement, ISearch>(
	({ value, onChange, placeholder, icon }, ref) => {
		return (
			<InputSearchWrapper>
				<StyledInputSearch
					type="search"
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					ref={ref}
				/>
				{icon}
			</InputSearchWrapper>
		)
	},
)

export default SearchMultiSelect
