import { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../store/slices/applicationCreationSlice";
import { useAuth } from "react-oidc-context";

import { apiInstance } from "../axios";

function useImageUploader() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function uploadImages(files) {
    setLoading(true);

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    apiInstance.post("/images", formData, {
      headers: {
        "Authorization": `Bearer ${user.access_token}`,
        "Content-Type": "multipart/form-data",
      },
    }).then(response => {
      dispatch(addImage(response.data))
    }).catch(e => {
      setError(true)
    }).finally(() => {
      setLoading(false)
    })
  }

  return [uploadImages, loading, error];
}

export default useImageUploader;
