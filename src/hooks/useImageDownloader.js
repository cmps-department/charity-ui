import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "react-oidc-context";

import { uploadImageInstance } from "../axios";

function useImageDownloader(imageId) {
    const { user } = useAuth()
    const [image, setImage] = useState();

    console.log(user.access_token);
    useEffect(() => {
        downloadImage()
    }, [imageId]);

    function downloadImage() {
        if (!imageId || !user?.access_token) {
            return;
        }

        fetch(`${process.env.REACT_APP_BASE_URL}/images/${imageId}`, {
            method: "GET",
            withCredentials: "true",
            "credentials": "include",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${user.access_token}`
            }
        }).then((response) => {
            response.blob().then((blob) => {
                const url = URL.createObjectURL(blob);
                setImage(url);
            });
        })

        // uploadImageInstance.get(`/images/${imageId}`, {
        //     responseType: "blob",
        //     headers: {
        //         Authorization: `Bearer ${user.access_token}`,
        //     }
        // }).then(response => {
        //     console.log(response)
        //     const url = URL.createObjectURL(response.data);
        //     setImage(url);
        // })
    }

    return image
}

export default useImageDownloader;