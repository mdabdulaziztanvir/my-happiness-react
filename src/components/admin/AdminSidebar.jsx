import { Link } from "react-router";

const AdminSidebar = () => {
  return (
    <>
      <div className="border min-w-75 h-screen overflow-x-hidden overflow-y-auto">
        <p className="text-center py-3 bg-gray-400 text-2xl font-extrabold text-white">
          Happiness React
        </p>
        {/* user management section */}
        <div className="p-4">
          <Link className="bg-gray-100" to="/admin/users">
            User Management
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
