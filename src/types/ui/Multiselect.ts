export interface IMultiSelectWrapperProps {
	$isOpen: boolean
}

export interface IInputBoxProps {
	$isOpen: boolean
	$servicesLength: number
}

export interface IServiceOptions {
	key: string
	name: string
}

export interface IMultiSelectProps {
	options: IServiceOptions[]
	onChange: (selectedServices: IServiceOptions[]) => void
	searchPlaceholder: string
	label: string
	value: IServiceOptions[]
}
