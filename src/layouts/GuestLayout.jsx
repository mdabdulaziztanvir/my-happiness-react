import { Outlet } from "react-router";
import GuestNavbar from "../components/guest/GuestNavbar";
import GuestFooter from "../components/guest/GuestFooter";

const GuestLayout = () => {
  return (
    <>
      <GuestNavbar />
      <Outlet />
      <GuestFooter />
    </>
  );
};

export default GuestLayout;
