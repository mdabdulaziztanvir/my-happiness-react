import { Outlet } from "react-router";
import { useAuthHook } from "../../hooks/UseAuthHook";

const AdminDashboard = () => {
  const { user, logout } = useAuthHook();
  return (
    <>
      <div className="border p-2 h-screen flex-1 overflow-x-hidden overflow-y-auto">
        <div className="customize-admin-dashboard-banner py-4 rounded-lg ps-2 flex justify-between items-center  shadow-lg shadow-gray-300">
          <h1 className="text-4xl">Welcome, {user && user?.name}</h1>
          <button
            onClick={logout}
            className="me-2 border rounded bg-gray-300 hover:bg-gray-200 transition-all px-3 py-2 cursor-pointer"
          >
            Logout
          </button>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default AdminDashboard;
