import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ marketData }) => {
    const [timeRange, setTimeRange] = useState('1D');

    if (!marketData) return <div>Loading...</div>;

    return (
        <div className="chart-section p-6 bg-gray-900 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Chart</h2>
            <div className="chart-controls mb-4">
                {['1D', '1W', '1M', '3M', '1Y', 'All'].map((range) => (
                    <button
                        key={range}
                        className={`mr-2 px-3 py-1 rounded ${timeRange === range ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setTimeRange(range)}
                    >
                        {range}
                    </button>
                ))}
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={marketData.chart[timeRange]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
