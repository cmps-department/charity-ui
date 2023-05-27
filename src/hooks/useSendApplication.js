import { useState } from "react";
import { useAuth } from "react-oidc-context";

import { apiInstance } from "../axios";

function useSendApplication() {
  const [loading, setLoading] = useState(false);
  const [succesful, setSuccesful] = useState(false);
  const [error, setError] = useState(false);

  const { user } = useAuth();

  function sendApplication(data) {
    apiInstance
      .post("/applications", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.access_token}`,
        },
      })
      .then(() => setSuccesful(true))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
    }
    
    return [loading, succesful, error, sendApplication];
}

export default useSendApplication;
