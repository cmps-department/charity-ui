import axios from "axios"

const _baseUrl = 'https://backend/uploadImages';


export const uploadImagesInstance = axios.create({
    baseURL: _baseUrl,
    timeout: 5000,
    headers: {
        "Authorization": `Bearer access_token`,
        "Content-Type": "multipart/form-data",
    }
})