import { useState, useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { apiInstance } from "../axios";

function useImageDownloader(imageId) {
    const { user } = useAuth()

    const [image, setImage] = useState();

    useEffect(() => {
        if (!imageId || !user?.access_token) {
            return;
        }

        apiInstance.get(`/images/${imageId}`, {
            responseType: "blob",
            headers: {
                "Authorization": `Bearer ${user.access_token}`
            }
        }).then(response => {
            const url = URL.createObjectURL(response.data);
            setImage(url);
        })
    }, [user, imageId]);

    return image
}

export default useImageDownloader;