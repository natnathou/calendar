import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

const App = ({ route }: RouteConfigComponentProps<any>) => {
  return (
    <div>
      This c is an Header...
      <div>{renderRoutes(route?.routes)}</div>
    </div>
  );
};

export default {
  component: App,
};
