import axios from "axios"

import type { InitialValuesType } from "components/Forms/ComplaintsBookForm/ComplaintsBookForm.types"
import { toBase64 } from "utils/toBase64"

const ID = import.meta.env.VITE_APP_SCRIPT_ID
const ENDPOINT = `https://script.google.com/macros/s/${ID}/exec`

export const sendDataToGoogleSheet = async (data: InitialValuesType) => {
	const formData = new FormData()

	for (const key of Object.keys(data)) {
		if (data[key as keyof InitialValuesType] instanceof File) continue
		formData.append(key, data[key as keyof InitialValuesType]?.toString() || "")
	}

	if (data.attachedFile instanceof File && data.attachedFile) {
		try {
			const base64 = await toBase64(data.attachedFile)
			formData.append("attachedFile", base64 as string)
		} catch (error) {
			console.error("Error converting file to base64")
		}
	}

	const response = await axios.post(ENDPOINT, formData)

	if (response.data.status === "error") {
		throw new Error(response.data.message)
	}

	return response.data
}
