import React from 'react';

function MarketsOverview({ marketData }) {
    if (!marketData) return <div>Loading...</div>;

    return (
        <div className="markets-overview p-6 bg-gray-900 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Markets Overview</h2>
            <ul>
                {marketData.indices.map((index, idx) => (
                    <li key={idx} className="mb-1 flex justify-between items-center p-2 bg-gray-800 rounded-lg text-white">
                        <span>{index.name}:</span>
                        <span>
                            {index.value} ({index.dailyChange} / {index.percentageChange}%)
                        </span>
                    </li>
                ))}
                {marketData.assets.map((asset, idx) => (
                    <li key={idx} className="mb-1 flex justify-between items-center p-2 bg-gray-800 rounded-lg text-white">
                        <span>{asset.name}:</span>
                        <span>
                            {asset.value} ({asset.dailyChange} / {asset.percentageChange}%)
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MarketsOverview;
