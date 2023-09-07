import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import RootPage from './routes/root';
import ErrorPage from './routes/error-page';
import RootIndexPage from './routes/root-index';
import HomePage from './routes/home';
import OrderPage from './routes/order';
import DailyPage from './routes/daily';
import PersonPage from './routes/person';
import NotificationsPage from './routes/notifications';
import AuthPage, { action as AuthPageAction } from './routes/admin/auth';
import AdminPage from './routes/admin/admin-page';
import AdminIndexPage from './routes/admin/admin-index-page';
import AdminTodayDeliveriesPage from './routes/admin/admin-today-deliveries';
import AdminToMonthDeliveriesPage from './routes/admin/admin-to-month-deliveries';
import AdminOrderPage from './routes/admin/admin-order';
import AdminInformationToMonthDeliveriesPage from './routes/admin/admin-information-to-month-deliveries';
import AdminCustomersPage from './routes/admin/admin-customers';
import AdminSettingsPage from './routes/admin/admin-settings';
import AdminUserInformationPage from './routes/admin/admin-user-information';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <RootIndexPage /> },
          { path: 'home', element: <HomePage /> },
          { path: 'order/:category', element: <OrderPage /> },
          { path: 'daily/:category', element: <DailyPage /> },
          { path: 'notifications', element: <NotificationsPage /> },
          { path: 'person', element: <PersonPage /> },
        ],
      },
    ],
  },
  { path: '/auth', element: <AuthPage />, errorElement: <ErrorPage />, action: AuthPageAction },
  {
    path: '/admin',
    element: <AdminPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <AdminIndexPage /> },
          { path: 'deliveries-today', element: <AdminTodayDeliveriesPage /> },
          { path: 'deliveries-to-month', element: <AdminToMonthDeliveriesPage /> },
          { path: 'customers', element: <AdminCustomersPage /> },
          { path: 'customers/:id', element: <AdminUserInformationPage /> },
          { path: 'setting', element: <AdminSettingsPage /> },
          { path: 'deliveries-today/:id', element: <AdminOrderPage /> },
          { path: 'deliveries-to-month/:day', element: <AdminInformationToMonthDeliveriesPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
