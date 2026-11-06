import React from 'react';
import { useAuth } from '../context/AuthContext';

export const Admin: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="page-content admin-dashboard">
      <header className="page-header">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>This is a protected area only accessible to authenticated users.</p>
      </header>

      <div className="dashboard-card">
        <h3>System Status: Operational</h3>
        <p>You have full access to view, edit, and publish content.</p>
        <button onClick={logout} className="btn-logout">
          End Session (Log Out)
        </button>
      </div>
    </div>
  );
};