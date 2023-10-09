/* import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css'; */

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import logo from './logo.svg';
import './App.css';
// import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header1';
import Products from './components/Products';
import Login1 from './components/Login1';
import Home from "./components/Home";
import Register from './components/Register';
import AddProduct from './components/AddProduct';


function App() {

  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
        <Route path='/' element={<Header><Home/></Header>}/>
        <Route path="/product" element={<Header><Products/></Header>} />
        <Route path="/login" element={<Header><Login1/></Header>} />
        <Route path="/register" element={<Header><Register/></Header>} />
        <Route path="/addProduct" element={<Header><AddProduct/></Header>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

