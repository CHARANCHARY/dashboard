/** @format */

import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../../components/Header/Header";
import StatCard from "../../components/StatCard/StatCard";
import DailyOrdersCharts from "../../components/OrdersCharts/DailyOrdersCharts/DailyOrdersCharts";
import OrderDistributionChart from "../../components/OrdersCharts/OrderDistributionChart/OrderDistributionChart";
import OrdersTable from "../../components/OrdersTable/OrdersTable";

const orderStats = {
  totalOrders: "8,545",
  pendingOrders: "26",
  completedOrders: "5,846",
  totalRevenue: "$65,845",
};

const OrdersPage = () => {
  return (
    <div className="flex-1 relative z-10 overflow-auto h-full">
      <Header title={"Orders"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={orderStats.totalOrders}
            color="#6366F1"
          />
          <StatCard
            name="Pending Orders"
            icon={Clock}
            value={orderStats.pendingOrders}
            color="#F59E0B"
          />
          <StatCard
            name="Completed Orders"
            icon={CheckCircle}
            value={orderStats.completedOrders}
            color="#10B981"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={orderStats.totalRevenue}
            color="#EF4444"
          />
        </motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<DailyOrdersCharts />
					<OrderDistributionChart />
        </div>
        
        <OrdersTable />

      </main>
    </div>
  );
};

export default OrdersPage;
