export const getSiteOrigin = () => {
	if (typeof window !== "undefined") {
		return window.location.origin
	}

	const hostname = globalThis?.location?.hostname || ""

	if (hostname.includes("staging")) {
		return "https://staging.binland.dev"
	}

	if (hostname.includes("localhost")) {
		return "http://localhost:3000"
	}

	if (hostname.includes("www")) {
		return "https://www.binland.dev"
	}

	return hostname
}
