import { Navigate, Outlet } from "react-router";
import { useAuthHook } from "../hooks/UseAuthHook";

const ProtectedRoute = () => {
  const { user, isLoading } = useAuthHook();
  if (isLoading) return <div>...loading</div>;
  return user ? <Outlet /> : <Navigate to="/guest" />;
};

export default ProtectedRoute;
