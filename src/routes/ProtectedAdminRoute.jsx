import { Navigate, Outlet } from "react-router";
import { useAuthHook } from "../hooks/UseAuthHook";
// import { useEffect } from "react";

const ProtectedAdminRoute = () => {
  // const navigate = useNavigate();

  const { user, isLoading } = useAuthHook();

  if (isLoading) return <div>...loading</div>;
  const isAdmin = user.adminValue === 1;

  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedAdminRoute;
