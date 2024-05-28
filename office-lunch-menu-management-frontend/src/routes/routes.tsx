import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import ProtectedRoute from "../components/ProtectedRoute";

// Lazy load the components
const Admin = lazy(() => import("../pages/Admin"));
const Employee = lazy(() => import("../pages/Employee"));
const Registration = lazy(() => import("../pages/Registration"));
const Login = lazy(()=>import("../pages/Login"))

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route element={<ProtectedRoute/>}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/employee" element={<Employee />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
