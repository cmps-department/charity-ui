import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import useUserRole from "../../hooks/useUserRole";

function AdminRoutes() {
    const {auth, isAdmin } = useUserRole();

  useEffect(() => {
    if (!auth.isAuthenticated && !auth.isLoading && !isAdmin) {
      auth.signinRedirect({ redirect_uri: window.location.href });
    }
  }, [auth, isAdmin]);

  return auth.isAuthenticated ? <Outlet /> : null;
}

export default AdminRoutes;