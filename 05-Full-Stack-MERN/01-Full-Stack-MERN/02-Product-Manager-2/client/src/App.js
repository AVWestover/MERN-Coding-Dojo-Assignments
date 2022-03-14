import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './view/Main';
import Detail from './components/Detail';
import './App.css';
//import ProductForm from "./components/ProductForm";
// import ProductList from '../components/ProductList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <Routes>
              <Route path="/" element={<Main/>} default /> {/*adding the default makes this the default path*/}
              <Route path="/product/:id" element={<Detail/>} />
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
