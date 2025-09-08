import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";

const server = 'http://127.0.0.1:8000/';
// const server = 'https://hotel-reservation-backend.herokuapp.com/';
//const server = 'https://web-production-c247.up.railway.app/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
);

export default server;

