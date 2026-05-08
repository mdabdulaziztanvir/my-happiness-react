import { Navigate, Outlet } from "react-router";
import GuestNavbar from "../components/guest/GuestNavbar";
import GuestFooter from "../components/guest/GuestFooter";
import { useAuthHook } from "../hooks/UseAuthHook";

const GuestLayout = () => {
  const { user } = useAuthHook();
  if (user) return <Navigate to="/" replace />;
  return (
    <>
      <GuestNavbar />
      <Outlet />
      <GuestFooter />
    </>
  );
};

export default GuestLayout;
