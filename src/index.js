import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import Store from './redux/ConfigureStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={Store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
);
