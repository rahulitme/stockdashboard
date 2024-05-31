import axios from 'axios';

const API_KEY = 'YZ6LW5XAX2UAD5L1';
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchMarketData = async (symbol = 'SPY') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
