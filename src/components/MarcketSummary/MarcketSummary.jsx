import React from 'react';

function MarketSummary({ marketData }) {
  if (!marketData) return <div>Loading...</div>;

  return (
    <div className="market-summary p-6 bg-gray-900 shadow-lg rounded-lg w-full h-auto">
      <h2 className="text-3xl font-bold mb-4 text-white">{marketData.headline}</h2>
      <p className={`text-lg mb-4 ${marketData.sentiment === 'Bullish' ? 'text-green-400' : 'text-red-400'}`}>
        {marketData.sentiment}
      </p>
      <div className="market-details mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-400">Market Value</span>
          <span className="text-xl font-semibold text-white">${marketData.marketValue.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-400">Change</span>
          <span className={`text-xl font-semibold ${marketData.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {marketData.change}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default MarketSummary;
