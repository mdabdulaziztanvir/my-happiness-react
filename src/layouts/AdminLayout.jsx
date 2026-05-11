import { Outlet } from "react-router";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <>
      <div className="flex gap-2">
        <AdminSidebar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
