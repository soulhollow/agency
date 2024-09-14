// src/components/ProtectedRoute/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext'; // Import AuthContext

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useContext(AuthContext); // Check authentication state

  return isAuthenticated ? element : <Navigate to="/login" replace />; // Redirect if not authenticated
}

export default ProtectedRoute;
