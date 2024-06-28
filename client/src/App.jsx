import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddOrder,
  Stats,
  AllOrders,
  Profile,
  Admin,
  EditOrder,
} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { action as addOrderAction } from './pages/AddOrder';
import { loader as allOrdersLoader } from './pages/AllOrders';
import { loader as editOrderLoader } from './pages/EditOrder';
import { action as editOrderAction } from './pages/EditOrder';
import { action as deleteOrderAction } from './pages/DeleteOrder';
import { loader as adminLoader } from './pages/Admin';
import { action as editAvatarAction } from './pages/Profile';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddOrder />,
            action: addOrderAction,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'all-orders',
            element: <AllOrders />,
            loader: allOrdersLoader,
          },
          {
            path: 'profile',
            element: <Profile />,
            action: editAvatarAction,
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'edit-order/:id',
            element: <EditOrder />,
            loader: editOrderLoader,
            action: editOrderAction,
          },
          { path: 'delete-order/:id', action: deleteOrderAction },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
