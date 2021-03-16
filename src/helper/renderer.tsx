import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { AnyAction, Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import Routes from '../client/Routes';
import { renderRoutes } from 'react-router-config';

export default (req: any, store: Store<any, AnyAction>) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );

  let html = `
  <!DOCTYPE html>
    <html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet"  href="style.css"/>
          <title>React App</title>
        </head>
          <body>
            <div id="root">${content}</div>
              ${
                process.env.NODE_ENV == 'development'
                  ? `<script src=\"${process.env.BROWSER_REFRESH_URL}\"></script>`
                  : ``
              }
            <script>
              window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src="client.js"></script>
        </body>
      </html>
     `;

  return html;
};
