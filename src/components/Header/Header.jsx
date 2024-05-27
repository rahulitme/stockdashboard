import React from 'react';
import { FaUser, FaCalendarAlt, FaSearch, FaChartLine } from 'react-icons/fa';

function Header() {
  const userName = 'User'; // Replace this with actual user name if available
  const currentDate = new Date().toLocaleDateString();

  return (
    <header className="w-full bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <FaUser className="mr-2" /> {/* User Icon */}
        <div>
          <h1 className="text-lg font-semibold">Hello, {userName}</h1>
          <p className="text-sm">{currentDate}</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaChartLine className="mr-4" /> {/* Chart Icon */}
        <FaSearch /> {/* Search Icon */}
        {/* Add more icons here */}
      </div>
    </header>
  );
}

export default Header;
