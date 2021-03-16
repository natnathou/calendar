import { matchRoutes, renderRoutes, RouteConfig } from 'react-router-config';
import App from './App';
import Counter from './components/Counter';
import Posts from './components/Posts';

const Routes: RouteConfig[] = [
  {
    ...App,
    routes: [
      { component: Counter, path: '/counter', exact: true },
      { component: Posts, path: '/posts', exact: true },
    ],
  },
];

export default Routes;
