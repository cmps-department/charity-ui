import axios from "axios";

export const uploadImagesInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 120000,
});

export const uploadImageInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 120000,
});