import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import Routes from './Routes';

declare global {
  interface Window {
    INITIAL_STATE: any;
  }
}

const store = configureStore({
  reducer: reducers,
  preloadedState: window.INITIAL_STATE || {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
