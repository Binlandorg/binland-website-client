import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URI } from "config";

const ApiFetch = async <T>(
    endpoint: string,
    options: AxiosRequestConfig = {}
): Promise<T> => {
    const config: AxiosRequestConfig = {
        url: `${BASE_URI}${endpoint}`,
        ...options
    }

    try {
        const reponse: AxiosResponse<T> = await axios(config)
        return reponse.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) throw new Error(`Error: ${error.response.status} - ${error.response.data}`)
            if (error.request) throw new Error('No response received from server.');
            throw new Error(`Request error: ${error.message}`);
        }
        throw new Error('Unexpected error')
    }
}

export default ApiFetch
