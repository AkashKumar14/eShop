import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/Login" element={
            <>
            <Login /></>
          }/>

          <Route path="/checkout" element={
            <><Header />
            <Checkout /></>
          }/>
          <Route path="/" element={
            <><Header />
            <Home /></>
          }/>    
        </Routes>
      </Router>
    </div>
  );    
}

export default App;
