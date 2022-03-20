import React, { useState } from 'react';
// import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './view/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import './App.css';
//import ProductForm from "./components/ProductForm";
// import ProductList from '../components/ProductList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <Routes>
              <Route path="/" element={<Main/>} default /> {/*adding the default makes this the default path*/}
              <Route path="/authors/:id" element={<Detail/>} />
              <Route path="/authors/edit/:id" element={<Update/>} />
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
