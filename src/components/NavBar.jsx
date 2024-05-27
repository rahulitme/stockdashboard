import React from 'react';
import { FaHome, FaChartBar, FaGlobe, FaChartLine, FaList } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className="navbar p-3 bg-gray-800 shadow-lg h-full flex justify-end items-center">
      <ul className="text-white flex flex-col">
        <li className="mb-4"><a href="#"><FaHome /></a></li>
        <li className="mb-4"><a href="#"><FaChartBar /></a></li>
        <li className="mb-4"><a href="#"><FaChartLine /></a></li>
        <li className="mb-4"><a href="#"><FaGlobe /></a></li>
        <li className="mb-4"><a href="#"><FaList /></a></li>
      </ul>
    </div>
  );
};

export default NavBar;
