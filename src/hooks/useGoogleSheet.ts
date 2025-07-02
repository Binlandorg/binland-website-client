import { useMutation } from "@tanstack/react-query"

import type { InitialValuesType } from "components/Forms/ComplaintsBookForm/ComplaintsBookForm.types"
import { sendDataToGoogleSheet } from "services/googleSheet"

export const useGoogleSheet = () => {
	return useMutation({
		mutationFn: (data: InitialValuesType) => sendDataToGoogleSheet(data),
	})
}
