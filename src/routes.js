import React from 'react';
import Loadable from 'react-loadable';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => (<CircularProgress size={24} className="loading" />);

const Dashboard = Loadable({
  loader: () => import('./AppSrc/views/Dashboard/Dashboard'),
  loading: Loading,
});

// const BreakTime = Loadable({
//   loader: () => import('./AppSrc/views/Settings/BreakTime/BreakTime'),
//   loading: Loading,
// });

const routes = [
  {
    path: '/app/dashboard', exact: true, name: 'Dashboard', component: Dashboard
  }
//   {
//     path: '/app/settings/breaktime', exact: true, name: 'Break Time', component: BreakTime
//   },
];

export default routes;
