import { capitalize } from "utils/capitalize"
import type { FormikType, IntlType, KeyType } from "./ComplaintsBookForm.types"
import type { LocationType } from "./ComplaintsBookForm.types"

export const arrayToOptions = <T>(array: T[]) => {
	if (!array) return []

	return array.map((item) => ({
		label: typeof item === "string" ? capitalize(item) : item,
		value: item,
	}))
}

export const reviewErrors = (
	formik: FormikType,
	key: KeyType,
	intl: IntlType,
) => {
	const error = formik.errors[key]
	const touched = formik.touched[key]

	return error && touched ? intl(error) : undefined
}

export const getStates = (location: LocationType) => {
	return Object?.keys(location || {}) || []
}

export const getDefaultState = (location: LocationType) => {
	return Object?.keys(location || {})[0] || ""
}

export const getCounties = (location: LocationType, state: string) => {
	return Object?.keys(location?.[state] || {}) || []
}

export const getDefaultCounty = (location: LocationType, state: string) => {
	return Object?.keys(location?.[state] || {})[0] || ""
}

export const getCity = (
	location: LocationType,
	state: string,
	county: string,
) => {
	return Object?.keys(location?.[state]?.[county] || {}) || []
}

export const getDefaultCity = (
	location: LocationType,
	state: string,
	county: string,
) => {
	return Object?.keys(location?.[state]?.[county] || {})[0] || ""
}
