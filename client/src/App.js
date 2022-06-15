import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductUpdate from './components/ProductUpdate';
import Main from './views/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/products" default />
          <Route element={<ProductDetail/>} path="/product/:_id" />
          <Route element={<ProductUpdate/>} path="/product/edit/:_id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
