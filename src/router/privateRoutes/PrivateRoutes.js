import { Outlet } from "react-router-dom";
import { useAuth } from "react-oidc-context";

function PrivateRoutes() {
    const auth = useAuth();
    
    if (!auth.isAuthenticated) {
        auth.signinRedirect()
    }

    return (
        auth.isAuthenticated ? <Outlet/> : null
    )
}

export default PrivateRoutes;