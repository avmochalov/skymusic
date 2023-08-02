import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
