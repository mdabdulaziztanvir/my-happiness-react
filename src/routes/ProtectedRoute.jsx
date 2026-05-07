import { Navigate, Outlet } from "react-router";
import { useAuthHook } from "../hooks/UseAuthHook";

const ProtectedRoute = () => {
  const { user } = useAuthHook();

  return user ? <Outlet /> : <Navigate to="/guest" />;
};

export default ProtectedRoute;
