import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import GuestLayout from "../layouts/GuestLayout";
import GuestHome from "../pages/guest/GuestHome";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import Signup from "../pages/guest/Signup";
import Login from "../pages/guest/Login";

const RoutesManager = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<ProtectedAdminRoute />}>
            <Route path="admin" element={<AdminLayout />}>
              <Route path="" element={<AdminDashboard />} />
            </Route>
          </Route>
        </Route>

        <Route path="guest" element={<GuestLayout />}>
          <Route path="" element={<GuestHome />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<h1>404 error</h1>} />
      </Routes>
    </>
  );
};

export default RoutesManager;
