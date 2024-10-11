// src/Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import necessary hooks
import { increment, decrement, reset } from './redux/actions'; // Import the actions

const Counter = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const count = useSelector((state) => state.count); // Hook to access the current count from the Redux store

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      {/* Button to increment the count */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      {/* Button to decrement the count */}
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>Decrement</button>
      {/* Button to decrement the count */}
      <button onClick={() => dispatch(reset())} style={{ marginLeft: '10px' }}>Reset</button>
    </div>
  );
};

export default Counter;