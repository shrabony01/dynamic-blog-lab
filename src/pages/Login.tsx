import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Login: React.FC = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate user authentication
    login();
    // Redirect user directly to the protected admin area upon login
    navigate('/admin');
  };

  return (
    <div className="page-content auth-container">
      <div className="auth-card">
        <h1>Admin Portal Login</h1>
        <p>Sign in to access your administrative dashboard.</p>

        {isAuthenticated ? (
          <div className="already-logged-in">
            <p>You are already logged in!</p>
            <button onClick={() => navigate('/admin')} className="btn-primary">
              Go to Dashboard
            </button>
          </div>
        ) : (
          <button onClick={handleLogin} className="btn-primary btn-block">
            Log In
          </button>
        )}
      </div>
    </div>
  );
};