import { useState, useEffect } from "react";
import { apiInstance } from "../axios";

function useUserInfo(userId) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!userId) {
            return;
        }

        apiInstance.get(`/users/${userId}`).then(response => setUser(response.data));
    }, [userId]);

    return user
}

export default useUserInfo;
