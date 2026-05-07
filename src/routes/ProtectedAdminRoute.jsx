import { Outlet, useNavigate } from "react-router";
import { useAuthHook } from "../hooks/UseAuthHook";
import { useEffect } from "react";

const ProtectedAdminRoute = () => {
  const navigate = useNavigate();

  const { user } = useAuthHook();

  const isAdmin = user.adminValue === "1";

  useEffect(() => {
    if (!isAdmin) {
      return navigate(-1);
    }
  }, [isAdmin, navigate]);

  return <Outlet />;

  //   return user.adminValue === "1" ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedAdminRoute;
