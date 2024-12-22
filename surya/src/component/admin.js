// src/AdminPage.js
import React from 'react';
import { Redirect } from 'react-router-dom';

const AdminPage = () => {
  // Simple check for admin authorization (e.g., using a flag in localStorage or context)
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  if (!isAdmin) {
    return <Redirect to="/" />;  // Redirect to home if not an admin
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Admin Panel. Manage users, content, and settings here.</p>
      {/* Admin functionalities */}
    </div>
  );
};

export default AdminPage;
