import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import { UpdateProvider } from './contexts/UpdateTime';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UpdateProvider>
        <App />
      </UpdateProvider>
    </Router>
  </React.StrictMode>
);
