import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../../components/Header/Header";
import StatCard from "../../components/StatCard/StatCard";
import UsersTable from "../../components/UsersTable/UsersTable";
import UserGrowthChart from "../../components/UsersChart/UserGrowthChart/UserGrowthChart";
import UserActivityHeatmap from "../../components/UsersChart/UserActivityHeatmap/UserActivityHeatmap";
import UserDemograpichsChart from "../../components/UsersChart/UserDemograpichsChart/UserDemograpichsChart";

const userStats = {
	totalUsers: 282245,
	newUsersToday: 424,
	activeUsers: 324243,
	churnRate: "1092.4%",
};

const UsersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 h-full'>
    <Header title='Users' />

    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
        <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <StatCard
                name='Total Users'
                icon={UsersIcon}
                value={userStats.totalUsers.toLocaleString()}
                color='#6366F1'
            />
            <StatCard name='New Users Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
            <StatCard
                name='Active Users'
                icon={UserCheck}
                value={userStats.activeUsers.toLocaleString()}
                color='#F59E0B'
            />
            <StatCard name='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />
              </motion.div>
              
              <UsersTable />

              {/* User Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                  
                  <UserGrowthChart />
                  <UserActivityHeatmap />
                  <UserDemograpichsChart />
</div>

          </main>
          
          </div>
  )
}

export default UsersPage