import React from 'react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 h-full flex flex-col justify-between">
      <div className="py-2">
        <a href="#" className="text-white flex items-center px-2 py-1 hover:bg-gray-700">
          <FaHome className="mr-1" />
        </a>
        <a href="#" className="text-white flex items-center px-2 py-1 hover:bg-gray-700">
          <FaSearch className="mr-1" />
        </a>
        <a href="#" className="text-white flex items-center px-2 py-1 hover:bg-gray-700">
          <FaUser className="mr-1" />
        </a>
      </div>
      <div className="py-2">
        {/* Add login or other links here */}
      </div>
    </nav>
  );
};

export default NavBar;
