import { NavLink, useNavigate } from "react-router";
import { useAuthHook } from "../hooks/UseAuthHook";

const Navbar = () => {
  const { logout } = useAuthHook();
  const navigate = useNavigate();
  function logoutandredirect() {
    logout();
    navigate("/guest");
  }
  const testF = ({ isActive }) => {
    return ` border-b-2 px-3 py-2 rounded-2xl ${isActive ? "border-blue-500 text-blue-500" : "border-transparent  hover:border-gray-300"}`;
  };
  return (
    <div className="flex gap-1 mt-2 ms-2">
      <NavLink end to="/" className={testF}>
        Home
      </NavLink>
      <NavLink end to="/profile" className={testF}>
        Profile
      </NavLink>
      <NavLink end to="/dashboard" className={testF}>
        Dashboard
      </NavLink>
      <NavLink onClick={logoutandredirect}>Logout</NavLink>
    </div>
  );
};

export default Navbar;
