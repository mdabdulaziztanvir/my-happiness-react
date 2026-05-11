import { Navigate, Outlet } from "react-router";
import { useAuthHook } from "../hooks/UseAuthHook";

const ProtectedAdminRoute = () => {
  const { user, isLoading } = useAuthHook();

  if (isLoading) return <div>...loading</div>;

  const isAdmin = user && Number(user?.adminValue) === 1;

  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedAdminRoute;
