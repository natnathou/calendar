import { AnyAction, Reducer } from '@reduxjs/toolkit';
import counterSlice, { CounterState } from './counterSlice';
import apiSlice, { PostState } from './apiSlice';

export interface Reducers {
  counter: Reducer<CounterState, AnyAction>;
  api: Reducer<PostState, AnyAction>;
}

const reducers: Reducers = {
  counter: counterSlice,
  api: apiSlice,
};

export default reducers;
