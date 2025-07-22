import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-56 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-6 font-bold text-lg border-b border-gray-700">Business Platform</div>
      <nav className="flex flex-col mt-4">
        <NavLink to="/" className={({ isActive }) => isActive ? 'bg-gray-700 p-4' : 'p-4 hover:bg-gray-700'}>
          Dashboard
        </NavLink>
        <NavLink to="/employees" className={({ isActive }) => isActive ? 'bg-gray-700 p-4' : 'p-4 hover:bg-gray-700'}>
          Employees
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
