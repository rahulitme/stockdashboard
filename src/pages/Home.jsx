import React from 'react';
import MarketSummary from '../components/MarcketSummary/MarcketSummary';
import SectorPerformance from '../components/SectorPerformance/SectorPerformance';
import MarketsOverview from '../components/MarcketOverview/MarcketOverview';
import Chart from '../components/Chart/Chart';

function Home({ marketData }) {
    return (
      <div className="home-dashboard p-4 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <MarketSummary marketData={marketData} />
          </div>
          <div className="col-span-1">
            <SectorPerformance marketData={marketData} />
          </div>
          <div className="col-span-1">
            <MarketsOverview marketData={marketData} />
          </div>
          <div className="col-span-1">
            <Chart marketData={marketData} />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
