import Header from "../../components/Header/Header";

import OverviewCards from "../../components/OverviewCards/OverviewCards";
import RevenueChart from "../../components/AnalyticsCharts/RevenueChart/RevenueChart";
import ChannelPerformance from "../../components/AnalyticsCharts/ChannelPerformance/ChannelPerformance";
import ProductPerformance from "../../components/AnalyticsCharts/ProductPerformance/ProductPerformance";
import UserRetention from "../../components/AnalyticsCharts/UserRetention/UserRetention";
import CustomerSegmentation from "../../components/AnalyticsCharts/CustomerSegmentation/CustomerSegmentation";
import AIPoweredInsights from "../../components/AIPoweredInsights/AIPoweredInsights";

const AnalyticsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900 h-full'>
			<Header title={"Analytics Dashboard"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <OverviewCards />
        <RevenueChart />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ChannelPerformance />
					<ProductPerformance />
					<UserRetention />
					<CustomerSegmentation />
        </div>
        
        <AIPoweredInsights />
        
      </main>
      
      </div>
  )
}

export default AnalyticsPage