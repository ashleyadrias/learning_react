// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { Provider } from 'react-redux'; // Import Provider for Redux
import store from './redux/store'; // Import the Redux store
import App from './App'; // Import the main App component

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root using React 18's createRoot API
const root = ReactDOM.createRoot(rootElement);

// Render the app inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);