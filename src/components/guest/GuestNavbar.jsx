import { NavLink } from "react-router";

const GuestNavbar = () => {
  const navButtonDesign = ({ isActive }) => {
    return ` bg-gray-50  px-2 ${isActive ? "border-b-2 border-red-500" : "border-transparent"}`;
  };

  return (
    <>
      <nav>
        <NavLink end className={navButtonDesign} to="/guest">
          Home
        </NavLink>
        <NavLink end className={navButtonDesign} to="/guest/signup">
          Signup
        </NavLink>
        <NavLink end className={navButtonDesign} to="/guest/login">
          Login
        </NavLink>
      </nav>
    </>
  );
};

export default GuestNavbar;
