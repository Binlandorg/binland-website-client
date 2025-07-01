import type { FormikProps } from "formik"
import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"

import Checkbox from "components/Checkbox/Checkbox"
import Select from "components/Select/Select"
import useIntlMessages from "hooks/useIntlMessages"
import { useLocation } from "hooks/useLocation"
import H5 from "ui/Titles/H5"
import Input from "ui/input/Input"
import { contactDetails, ownerData } from "./ComplaintsBookForm.data"
import { arrayToOptions, getCity } from "./ComplaintsBookForm.helper"
import { getCounties, getDefaultCity } from "./ComplaintsBookForm.helper"
import { getDefaultCounty, getDefaultState } from "./ComplaintsBookForm.helper"
import { getStates, reviewErrors } from "./ComplaintsBookForm.helper"
import { ContactDetails, InfoAuthorization } from "./ComplaintsBookForm.styles"
import { OwnerData } from "./ComplaintsBookForm.styles"
import type { InitialValuesType } from "./ComplaintsBookForm.types"

type Props = {
	formik: FormikProps<InitialValuesType>
}

const ContactDataForm: React.FC<Props> = ({ formik }) => {
	const intl = useIntlMessages()
	const { data: location, isLoading, isError } = useLocation()
	const [state, setState] = useState<string>("")
	const [county, setCounty] = useState<string>("")
	const error = (key: keyof InitialValuesType) => reviewErrors(formik, key, intl)

	const documentTypeOptions = useMemo(
		() => [
			{
				label: intl("complaints.book.form.document.type.option.dni"),
				value: "dni",
			},
			{
				label: intl("complaints.book.form.document.type.option.passport"),
				value: "passport",
			},
			{
				label: intl("complaints.book.form.document.type.option.ruc"),
				value: "ruc",
			},
		],
		[intl],
	)

	useEffect(() => {
		if (!Object?.keys(location || {}).length || !location) return

		const state = getDefaultState(location)
		const county = getDefaultCounty(location, state)
		const city = getDefaultCity(location, state, county)

		setState(state)
		setCounty(county)

		formik.setFieldValue("state", state)
		formik.setFieldValue("county", county)
		formik.setFieldValue("city", city)
	}, [location, formik.setFieldValue])

	const stateOptions = useMemo(
		() => arrayToOptions(getStates(location || {})),
		[location],
	)
	const countyOptions = useMemo(
		() => arrayToOptions(getCounties(location || {}, state)),
		[location, state],
	)
	const cityOptions = useMemo(
		() => arrayToOptions(getCity(location || {}, state, county)),
		[location, state, county],
	)

	const handleStateChange = (value: string) => {
		const newCounty = getDefaultCounty(location || {}, value)
		const newCity = getDefaultCity(location || {}, value, newCounty)

		setState(value)
		setCounty(newCounty)

		formik.setFieldValue("state", value)
		formik.setFieldValue("county", newCounty)
		formik.setFieldValue("city", newCity)
	}

	const handleCountyChange = (value: string) => {
		const newCity = getDefaultCity(location || {}, state, value)

		setCounty(value)

		formik.setFieldValue("county", value)
		formik.setFieldValue("city", newCity)
	}

	if (isLoading) return <div>Cargando...</div>
	if (isError) return <div>Error</div>

	return (
		<>
			<OwnerData>
				<H5 $weight="medium">{intl("complaints.book.form.fieldset.owner.data")}</H5>
				<div className="inputs">
					<Select
						label={intl("complaints.book.form.document.type.select.label")}
						name="documentType"
						value={formik.values.documentType}
						options={documentTypeOptions}
						error={error("documentType")}
						onChange={(value) => formik.setFieldValue("documentType", value)}
						onBlur={() => formik.setFieldTouched("documentType", true)}
					/>
					{ownerData.map((item) => (
						<Input
							key={item.name}
							id={item.name}
							name={item.name}
							label={intl(item.label)}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values[item.name].toString()}
							error={error(item.name)}
						/>
					))}
				</div>
			</OwnerData>
			<ContactDetails>
				<H5 $weight="medium">
					{intl("complaints.book.form.fieldset.contact.data")}
				</H5>
				<div className="inputs">
					<Input
						id="address"
						label={intl("complaints.book.form.address.input.label")}
						name="address"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.address}
						error={error("address")}
					/>
					<Select
						label={intl("complaints.book.form.state.select.label")}
						name="state"
						value={formik.values.state}
						options={stateOptions}
						error={error("state")}
						onChange={handleStateChange}
						onBlur={() => formik.setFieldTouched("state", true)}
					/>
					<Select
						label={intl("complaints.book.form.county.select.label")}
						name="county"
						value={formik.values.county}
						options={countyOptions}
						error={error("county")}
						onChange={handleCountyChange}
						onBlur={() => formik.setFieldTouched("county", true)}
					/>
					<Select
						label={intl("complaints.book.form.city.select.label")}
						name="city"
						value={formik.values.city}
						options={cityOptions}
						error={error("city")}
						onChange={(value) => formik.setFieldValue("city", value)}
						onBlur={() => formik.setFieldTouched("city", true)}
					/>
					{contactDetails.map((item) => (
						<Input
							key={item.name}
							id={item.name}
							name={item.name}
							label={intl(item.label)}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values[item.name].toString()}
							error={error(item.name)}
						/>
					))}
				</div>
			</ContactDetails>
			<InfoAuthorization>
				<Checkbox
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					checked={formik.values.isAccepted}
					name="isAccepted"
				>
					{intl("complaints.book.form.info.authorization")}
					<Link to={"/privacy-policy"} target="_blank" rel="noopener noreferrer">
						{intl("complaints.book.form.info.authorization.link")}
					</Link>
				</Checkbox>
			</InfoAuthorization>
		</>
	)
}

export default ContactDataForm
