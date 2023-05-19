import { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../store/slices/postCreationSlice";
import { useAuth } from "react-oidc-context";

import { uploadImagesInstance } from "../axios";

function useImageUploader() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();

  function getAuthorizationToken() {
    if (user && user.access_token) {
      return `Bearer ${user.access_token}`;
    }
    return "";
  }

  async function uploadImages(files) {
    try {
      setLoading(true);
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      const response = await uploadImagesInstance.post("/images", formData, {
        headers: {
          Authorization: getAuthorizationToken(),
          "Content-Type": "multipart/form-data",
        },
      });
        
      dispatch(addImage(response.data));
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return [uploadImages, loading, error];
}

export default useImageUploader;
