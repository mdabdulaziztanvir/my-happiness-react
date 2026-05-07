import { Outlet } from "react-router";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <>
      <AdminSidebar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
