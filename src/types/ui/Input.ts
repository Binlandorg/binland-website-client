import type { WithClassName } from "types/components/shared"

export interface IInputWrapper {
	$isError: boolean
}

export interface IStyledInput extends WithClassName {
	id: string
	type?: "text" | "number" | "email" | "password"
	name?: string
	value: string | number
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
	placeholder?: string
	label?: string
	error?: string | null
}
