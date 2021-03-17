import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RootState } from '..';

import {
  CounterState,
  increment,
  decrement,
  SetAmount,
} from '../reducers/counterSlice';

interface CounterProps {
  counter: CounterState;
  increment: ActionCreatorWithoutPayload<string>;
  decrement: ActionCreatorWithoutPayload<string>;
  SetAmount: ActionCreatorWithPayload<number, string>;
}

const _Counter = ({
  counter,
  increment,
  decrement,
  SetAmount,
}: CounterProps) => {
  const [input, setInput] = useState('');

  const handleTape = (e: React.ChangeEvent<HTMLInputElement>) => {
    debugger;
    setInput(e.target.value);
  };
  return (
    <div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' value={input} onChange={handleTape} />
        <button onClick={() => SetAmount(parseInt(input))}>Set</button>
      </form>
      <div>Value: {counter.value}</div>
    </div>
  );
};

const mapStateToProps = ({ counter }: RootState) => {
  return { counter };
};

export default {
  component: connect(mapStateToProps, {
    increment,
    decrement,
    SetAmount,
  })(_Counter),
};
