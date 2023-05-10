import axios from "axios";
import { useAuth } from 'react-oidc-context';

export const uploadImagesInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/images`,
    timeout: 120000,
    headers: {
        "Content-Type": "multipart/form-data",
    }
});

uploadImagesInstance.interceptors.request.use((config) => {
    const { user } = useAuth();
    if (user && user.access_token) {
        config.headers.Authorization = `Bearer ${user.access_token}`;
    }

    return config;
})