import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // End user session and send back to home page
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          DevLog<span>.</span>
        </Link>

        <div className="nav-links">
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            Blog
          </NavLink>

          {/* Conditionally render admin link only if authenticated */}
          {isAuthenticated && (
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              Admin
            </NavLink>
          )}

          {/* Conditionally render Login link or Logout button */}
          {isAuthenticated ? (
            <button onClick={handleLogout} className="btn-logout">
              Log Out
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              Log In
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};