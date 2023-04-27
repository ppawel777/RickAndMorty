import React from 'react';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client';

// import App from './App'
import App from './App.jsx'

import './index.scss';
const AppRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<AppRouter />);
// root.render(<App />);
