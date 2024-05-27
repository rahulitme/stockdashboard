import React from 'react';

function SectorPerformance({ marketData }) {
    if (!marketData) return <div>Loading...</div>;

    const half = Math.ceil(marketData.sectors.length / 2);
    const leftColumn = marketData.sectors.slice(0, half);
    const rightColumn = marketData.sectors.slice(half);

    return (
        <div className="sector-performance p-6 bg-gray-900 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Sector Performance</h2>
            <div className="flex flex-wrap justify-between">
                <ul className="flex-1 mr-2">
                    {leftColumn.map((sector, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center mb-3 p-5 rounded-lg bg-gray-800"
                        >
                            <span className="font-semibold text-white">{sector.name}</span>
                            <span className={`text-lg font-bold ${sector.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {sector.change}%
                            </span>
                        </li>
                    ))}
                </ul>
                <ul className="flex-1 ml-2">
                    {rightColumn.map((sector, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center mb-2 p-2 rounded-lg bg-gray-800"
                        >
                            <span className="font-semibold text-white">{sector.name}</span>
                            <span className={`text-lg font-bold ${sector.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {sector.change}%
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SectorPerformance;
