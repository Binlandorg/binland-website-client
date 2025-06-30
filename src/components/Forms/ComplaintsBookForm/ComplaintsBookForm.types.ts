export type ContactDataFormType = {
	documentType: string
	documentNumber: string
	firstName: string
	lastName: string
	address: string
	state: string
	county: string
	city: string
	email: string
	phone: string
	isAccepted: boolean
}

export type DetailsFormType = {
	serviceType: string
	amount: string
	description: string
	typeOfRequest: "claim" | "complaint"
	detailsOfTheRequest: string
	attachedFile: File | null
	orderDetails: string
}

export type InformationFormType = {
	meansOfConfirmation: "email" | "address"
}

export type InitialValuesType = ContactDataFormType &
	DetailsFormType &
	InformationFormType

export type ContactDataFieldsType = {
	label: string
	name: Partial<keyof ContactDataFormType>
}

export type DetailsDataFieldsType = {
	label: string
	name: Partial<keyof DetailsFormType>
}
