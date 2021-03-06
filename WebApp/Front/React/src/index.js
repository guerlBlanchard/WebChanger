import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import Auth from './Home/Auth/Auth'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/Auth' element={<Auth/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();