import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your Business Management Dashboard.</p>
      </main>
    </div>
  );
};

export default Dashboard;
