import { useState } from "react";
import { useAuth } from "react-oidc-context";

import { apiInstance } from "../axios";

function useSendApplication() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  const { user } = useAuth();

  function sendApplication(data) {
    apiInstance
      .post("/applications", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.access_token}`,
        },
      })
      .then((response) => console.log(response))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
    }
    
    return [loading, error, sendApplication];
}

export default useSendApplication;
