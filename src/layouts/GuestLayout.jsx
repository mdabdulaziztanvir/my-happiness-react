import { Outlet, useNavigate } from "react-router";
import GuestNavbar from "../components/guest/GuestNavbar";
import GuestFooter from "../components/guest/GuestFooter";
import { useAuthHook } from "../hooks/UseAuthHook";
import { useEffect } from "react";

const GuestLayout = () => {
  const navigate = useNavigate();
  const { user } = useAuthHook();

  useEffect(() => {
    if (user && user.adminValue === 1) {
      return navigate("/admin");
    } else if (user && !user.adminValue) {
      return navigate("/");
    }
  }, [navigate, user]);

  // if (user) return <Navigate to="/" replace />;
  return (
    <>
      <GuestNavbar />
      <Outlet />
      <GuestFooter />
    </>
  );
};

export default GuestLayout;
