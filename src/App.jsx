import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Home from './pages/Home';

const API_KEY = '0WB7WUUAZ62C2JXZ';
const BASE_URL = 'https://www.alphavantage.co/query';

const fetchMarketData = async (symbol = 'SPY') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol,
        apikey: API_KEY,
      },
    });
    console.log(response.data); // Add this line
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

function App() {
  const [marketData, setMarketData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMarketData();
        processMarketData(data); // Process and set the market data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const processMarketData = (data) => {
    if (!data || !data['Time Series (Daily)']) {
      console.error('Received null or undefined data');
      return;
    }

    const timeSeries = data['Time Series (Daily)'];
    const chartData = Object.keys(timeSeries).map(date => ({
      time: date,
      price: parseFloat(timeSeries[date]['4. close'])
    })).reverse();

    setMarketData({
      headline: "Today's Market Summary",
      sentiment: "Bullish",
      marketValue: 15000,
      change: 1.2, // Positive value for Bullish, negative for Bearish
      sectors: [
        { name: 'Industrials', change: 1.5 },
        { name: 'Technology', change: 2.3 },
        { name: 'Healthcare', change: -0.8 }
      ],
      indices: [
        { name: 'S&P 500', value: 4200, dailyChange: 15, percentageChange: 0.36 },
        { name: 'Nasdaq', value: 14000, dailyChange: 60, percentageChange: 0.43 },
        { name: 'Dow Jones', value: 33000, dailyChange: -50, percentageChange: -0.15 }
      ],
      assets: [
        { name: 'Crude Oil', value: 70, dailyChange: 1.5, percentageChange: 2.18 },
        { name: 'Gold', value: 1800, dailyChange: 10, percentageChange: 0.56 },
        { name: 'Silver', value: 25, dailyChange: 0.2, percentageChange: 0.81 },
        { name: 'Bitcoin', value: 40000, dailyChange: 500, percentageChange: 1.27 }
      ],
      chart: {
        '1D': chartData,
        '1W': chartData, // Simplified for example; you need to process accordingly
        '1M': chartData,
        '3M': chartData,
        '1Y': chartData,
        'All': chartData
      }
    });
  };

  return (
    <div className="app flex flex-col items-center">
      <Header />
      <div className="main-content flex w-full max-w-7xl my-6">

        <div className="w-5/6">
          <Home marketData={marketData} />
        </div>
      </div>
    </div>
  );
}

export default App;
