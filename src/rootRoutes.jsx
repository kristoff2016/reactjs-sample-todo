import { DashboardContainer } from './routes/DashboardRoute';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: DashboardContainer }
];

export default routes;
