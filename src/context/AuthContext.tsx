import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { AuthContextType } from '../types';

// Initialize context with default fallback values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Authentication state flag
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Simulates user authentication login action
  const login = () => {
    setIsAuthenticated(true);
  };

  // Simulates user logout action
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to cleanly consume AuthContext with safety check
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};