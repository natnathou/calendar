import React from 'react';
import serialize from 'serialize-javascript';
import App from '../client/App';
import { renderToString } from 'react-dom/server';
import { AnyAction, Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

export default (req: any, store: Store<any, AnyAction>) => {
  const content = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  let html = `    
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
            ? `<script src="/reload/reload.js"></script>`
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
