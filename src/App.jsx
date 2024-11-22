import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OverviewPage from "../src/Pages/OverviewPage/OverviewPage"
import ProductsPage from '../src/Pages/ProductsPage/ProductsPage';
import UsersPage from './Pages/UsersPage/UsersPage';
import SalesPage from './Pages/SalesPage/SalesPage';
import OrdersPage from './Pages/OrdersPage/OrdersPage';
import AnalyticsPage from './Pages/AnalyticsPage/AnalyticsPage'
import SettingsPage from './Pages/SettingsPage/SettingsPage';
import Layout from './components/Layout/Layout'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <OverviewPage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/users', element: <UsersPage /> },
      { path: '/sales', element: <SalesPage /> },
      { path: '/orders', element: <OrdersPage /> },
      { path: '/analytics', element: <AnalyticsPage /> },
      { path:  '/settings', element: <SettingsPage />}
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
