import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

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
    <App />
  </Provider>,
  document.querySelector('#root')
);
