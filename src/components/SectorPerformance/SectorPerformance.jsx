import React from 'react';

function SectorPerformance({ marketData }) {
  if (!marketData) return <div>Loading...</div>;

  return (
    <div className="sector-performance p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Sector Performance</h2>
      <ul>
        {marketData.sectors.map((sector, index) => (
          <li
            key={index}
            className={`mb-2 p-2 rounded-lg ${sector.change >= 0 ? 'bg-green-600' : 'bg-red-600'} text-white`}
          >
            <span className="font-semibold">{sector.name}</span>: {sector.change}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SectorPerformance;
