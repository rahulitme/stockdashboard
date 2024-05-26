import React from 'react';

function Header() {
  const userName = 'User'; // Replace this with actual user name if available
  const currentDate = new Date().toLocaleDateString();

  return (
    <header className="w-full bg-gray-800 p-4 text-white flex justify-between items-center">
      <div>
        <h1 className="text-lg font-semibold">Hello, {userName}</h1>
        <p className="text-sm">{currentDate}</p>
      </div>
    </header>
  );
}

export default Header;
