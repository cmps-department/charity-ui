import axios from "axios";

export const apiInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 120000,
});