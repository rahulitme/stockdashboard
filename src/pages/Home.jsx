import React from 'react';
import MarketSummary from '../components/MarcketSummary/MarcketSummary';
import SectorPerformance from '../components/SectorPerformance/SectorPerformance';
import MarketsOverview from '../components/MarcketOverview/MarcketOverview';
import Chart from '../components/Chart/Chart';
import NavBar from '../components/NavBar';

function Home({ marketData }) {
  return (
    <div className="home-dashboard p-4 bg-gray-800 min-h-screen">
      <div className="max-w-screen-xl mx-auto"> {/* Set maximum width and center content */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <NavBar />
          </div>
          <div className="col-span-3 md:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 lg:col-span-2">
                <MarketSummary marketData={marketData} />
              </div>
              <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <SectorPerformance marketData={marketData} />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <MarketsOverview marketData={marketData} />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <Chart marketData={marketData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
