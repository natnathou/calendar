import { Request } from 'express';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import reducers from '../client/reducers';

export default (req: Request) => {
  const axiosInstance = axios.create({
    baseURL: '',
    headers: { cookie: req.get('cookie') || '' },
  });

  const store = configureStore({
    reducer: reducers,
    preloadedState: {},
  });
  return store;
};
