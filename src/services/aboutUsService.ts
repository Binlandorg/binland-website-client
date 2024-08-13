import { IAboutUsInfo } from "pages/AboutUs/AboutUs"
import ApiFetch from "./apiFetch"

export const getAboutUsInformation = async (language: string): Promise<IAboutUsInfo> => {
    return await ApiFetch<IAboutUsInfo>('/about-us', {
        headers: {
            'Accept-Language': language
        }
    })
}
