import { useState, useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { apiInstance } from "../axios";

function useImageDownloader(imageId) {
    const { user } = useAuth()

    const [image, setImage] = useState();

    useEffect(() => {
        if (!imageId) {
            return;
        }

        apiInstance.get(`/images/${imageId}`, {
            responseType: "blob",
        }).then(response => {
            const url = URL.createObjectURL(response.data);
            setImage(url);
        })
    }, [user, imageId]);

    return image
}

export default useImageDownloader;