import { useState, useEffect } from "react";
import { useAuth } from "react-oidc-context";
import jwtDecode from "jwt-decode";

function useUserRole() {
    const [isAdmin, setIsAdmin] = useState();
    const auth = useAuth();
    const { user } = auth;

    useEffect(() => {
        if (user) {
            const userInfo = jwtDecode(auth.user.access_token);
            setIsAdmin(userInfo.realm_access.roles.includes("ROLE_ADMIN"));
        } else {
            setIsAdmin(false)
        }
    }, [auth, user])

    return {auth, isAdmin }
}

export default useUserRole;