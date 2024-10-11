// src/redux/actions.js

// Action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET     = 'RESET';

// Action creators
export const increment = () => {
  return {
    type: INCREMENT, // Action for incrementing the counter
  };
};

export const decrement = () => {
  return {
    type: DECREMENT, // Action for decrementing the counter
  };
};

export const reset = () => {
    return {
      type: RESET, // Action for decrementing the counter
    };
  };