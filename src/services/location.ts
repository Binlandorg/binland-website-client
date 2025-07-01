import axios from "axios"

const ENDPOINT = "https://free.e-api.net.pe/ubigeos.json"

export const getLocations = async () => {
	return await axios.get(ENDPOINT)
}
