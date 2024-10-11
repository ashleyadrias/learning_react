// src/redux/reducer.js
import { INCREMENT, DECREMENT, RESET } from './actions';

// Define the initial state for the counter
const initialState = {
  count: 0, // Initial count value
};

// Reducer function to handle actions
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: // If the action type is 'INCREMENT'
      return {
        ...state,
        count: state.count + 1, // Increase count by 1
      };
    case DECREMENT: // If the action type is 'DECREMENT'
      return {
        ...state,
        count: state.count - 1, // Decrease count by 1
      };
    case RESET: // If the action type is 'RESET'
      return {
        ...state,
        count: initialState.count, // Reset to 1
      };
    default:
      return state; // Return the current state if action type is not recognized
  }
};

export default counterReducer;