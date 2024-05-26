import React from 'react';

function MarketsOverview({ marketData }) {
  if (!marketData) return <div>Loading...</div>;

  return (
    <div className="markets-overview p-6 bg-gray-900 shadow-lg rounded-lg w-full md:w-1/2 lg:w-1/3 h-64">
      <h2 className="text-2xl font-bold mb-4 text-white">Markets Overview</h2>
      <ul className="text-white">
        {marketData.indices.map((index, idx) => (
          <li key={idx} className="mb-2">
            <span>{index.name}: {index.value} </span>
            <span
              className={`ml-2 ${
                index.dailyChange >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              ({index.dailyChange} / {index.percentageChange}%)
            </span>
          </li>
        ))}
        {marketData.assets.map((asset, idx) => (
          <li key={idx} className="mb-2">
            <span>{asset.name}: {asset.value} </span>
            <span
              className={`ml-2 ${
                asset.dailyChange >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              ({asset.dailyChange} / {asset.percentageChange}%)
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MarketsOverview;
