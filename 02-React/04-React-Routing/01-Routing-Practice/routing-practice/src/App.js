import React from "react";
import { Router } from '@reach/router';
import './App.css';
import HomeComponent from './components/HomeComponent';
import NumberWordComponent from './components/NumberWordComponent';

function App() {
  return (
    <div className="App">
      <Router>
        {/* HOME */}
        <HomeComponent path="/home"/>
        {/* HELLO */}
        <NumberWordComponent path="/:input" />
        {/* MORE DETAIL NUMBERWORD */}
        <NumberWordComponent path="/:input/:tColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;
