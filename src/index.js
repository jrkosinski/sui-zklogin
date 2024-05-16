import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Callback from './Callback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/auth" element={<App />} />
            <Route path="/" element={<Callback />} />
        </Routes>
    </Router>
);

reportWebVitals();
