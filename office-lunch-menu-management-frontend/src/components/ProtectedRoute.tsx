import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const ProtectedRoute: React.FC = () => {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
