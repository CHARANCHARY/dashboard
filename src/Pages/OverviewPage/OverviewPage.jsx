import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import Header from '../../components/Header/Header'
import { motion } from "framer-motion"
import StatCard from "../../components/StatCard/StatCard";
import SalesOverviewChart from "../../components/OverviewCharts/SalesOverviewChart/SalesOverviewChart";
import CategoryDistributionChart from "../../components/OverviewCharts/CategoryDistributionChart/CategoryDistributionChart";
import SalesChannelChart from "../../components/OverviewCharts/SalesChannelChart/SalesChannelChart";

const OverviewPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 h-full'>
      <Header title="Overview" />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Sales' icon={Zap} value='$87,345' color='#6366F1' />
					<StatCard name='New Users' icon={Users} value='3,658' color='#8B5CF6' />
					<StatCard name='Total Products' icon={ShoppingBag} value='866' color='#EC4899' />
					<StatCard name='Conversion Rate' icon={BarChart2} value='48.5%' color='#10B981' />
        </motion.div>
        
        {/*  CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>

      </main>
    </div>
  )
}

export default OverviewPage