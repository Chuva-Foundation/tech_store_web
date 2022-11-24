import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from './store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();