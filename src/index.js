import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
//import Home from './pages/Home';
//import Menu from './pages/Menu';
//import Contact from './pages/Contact';
//import About from './pages/About';
//import Login from './pages/Login';
//import NewProduct from './pages/NewProduct';
//import SignUp from './pages/SignUp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
</BrowserRouter>,

);

reportWebVitals();
