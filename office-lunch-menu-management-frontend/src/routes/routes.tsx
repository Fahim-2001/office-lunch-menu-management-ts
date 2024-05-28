import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/shared/NavBar";

// Lazy load the components
const Admin = lazy(() => import("../pages/Admin"));
const Employee = lazy(() => import("../pages/Employee"));
const Registration = lazy(() => import("../pages/Registration"));

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
