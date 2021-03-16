import { matchRoutes, renderRoutes, RouteConfig } from 'react-router-config';
import App from './App';
import Counter from './components/Counter';

const Routes: RouteConfig[] = [
  {
    ...App,
    routes: [{ component: Counter, path: '/counter', exact: false }],
  },
];

export default Routes;
