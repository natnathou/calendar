import { AnyAction, Reducer } from '@reduxjs/toolkit';
import counterSlice, { CounterState } from './counterSlice';

export interface Reducers {
  counter: Reducer<CounterState, AnyAction>;
}

const reducers: Reducers = {
  counter: counterSlice,
};

export default reducers;
