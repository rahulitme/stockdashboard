import React from 'react';

function MarketSummary({ marketData }) {
  if (!marketData) return <div>Loading...</div>;

  return (
    <div className="market-summary p-6 bg-gray-900 shadow-lg rounded-lg box w-full md:w-1/2 lg:w-1/3 h-64">
      <h2 className="text-2xl font-bold mb-4 text-white">{marketData.headline}</h2>
      <p className={`text-lg ${marketData.sentiment === 'Bullish' ? 'text-green-400' : 'text-red-400'}`}>
        {marketData.sentiment}
      </p>
    </div>
  );
}

export default MarketSummary;
