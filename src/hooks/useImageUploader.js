import { useState } from "react";

import { uploadImagesInstance } from "../axios";

function useImageUploader() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function uploadImages(files) {
        try {
            setLoading(true);
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append("images", files[i]);
            }
            console.log(formData.getAll("images"));

            const response = await uploadImagesInstance.post(
                "/images",
                formData
            )

            return response.data;
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return [uploadImages, loading, error];
}

export default useImageUploader;