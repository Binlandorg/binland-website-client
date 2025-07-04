/**
 * Convert a file to base64
 * @param file
 * @returns Promise<string>
 */

export const toBase64 = (file: File) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader()

		reader.onload = (e) => {
			const result = e.target?.result as string
			const base64 = result.split(",")[1]

			resolve(base64)
		}

		reader.onerror = (err) => reject(err)
		reader.readAsDataURL(file)
	})
