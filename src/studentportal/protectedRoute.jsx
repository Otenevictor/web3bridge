import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('schoolPortalUsername') &&
    localStorage.getItem('schoolPortalPassword');

  return isAuthenticated ? children : <Navigate to="/schoolportal" replace />;
};

export default ProtectedRoute;