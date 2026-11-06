import React, { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // If user is not authenticated, redirect them to /login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, allow access to protected page
  return <>{children}</>;
};