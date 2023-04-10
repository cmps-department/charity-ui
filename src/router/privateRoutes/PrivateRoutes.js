import { Outlet } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { useEffect } from "react";

function PrivateRoutes() {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isAuthenticated && !auth.isLoading) {
      auth.signinRedirect({ redirect_uri: window.location.href });
    }
  }, [auth]);

  return auth.isAuthenticated ? <Outlet /> : null;
}

export default PrivateRoutes;
