import axios from 'axios';

const API_KEY = '0WB7WUUAZ62C2JXZ';
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
