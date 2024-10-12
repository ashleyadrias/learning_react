import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import App from './App';
import store from './redux/store';      // Import your Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>            {/* Wrap your app inside the Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);