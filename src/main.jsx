import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Context from './Components/Context.jsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  
    <BrowserRouter>
    <React.StrictMode>
    <Context>
      <App />
      </Context>
      </React.StrictMode>
    </BrowserRouter>
  
);
