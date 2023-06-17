import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './grosso-bootreact/components/Navbar';
import Footer from './grosso-bootreact/components/Footer';
import Analytics from './grosso-bootreact/utils/analytics';
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Analytics.visited();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar themeSelect />
    <App />
    <Footer />
  </React.StrictMode>
);
