// src/redux/store.js
import { createStore } from 'redux';
import counterReducer from './reducer'; // Import the reducer

// Create the Redux store and pass in the reducer
const store = createStore(
  counterReducer, // Reducer to manage the state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Optional: Enable Redux DevTools extension for debugging
);

export default store;