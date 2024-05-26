import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const Chart = ({ marketData }) => {
  const [timeRange, setTimeRange] = useState('1D');

  if (!marketData) return <div>Loading...</div>;

  return (
    <div className="flex justify-center bg-gray-900 h-full p-2">
      <div className="chart-section p-4 bg-gray-800 shadow-lg rounded-lg w-full max-w-lg my-4"> {/* Added my-4 for vertical margin */}
        <h2 className="text-lg font-semibold mb-2 text-white">Chart</h2>
        <div className="chart-controls mb-4 flex justify-center">
          {['1D', '1W', '1M', '3M', '1Y', 'All'].map((range) => (
            <button
              key={range}
              aria-label={`Show data for ${range}`}
              className={`mr-1 px-2 py-1 text-sm transition-colors duration-200 rounded ${
                timeRange === range ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
              onClick={() => setTimeRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={marketData.chart[timeRange]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="time" stroke="#ddd" />
            <YAxis stroke="#ddd" />
            <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#444' }} />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#82ca9d" activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
