// components/ProtectedRoute.js - New component for protected routes
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children, redirectPath }) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;