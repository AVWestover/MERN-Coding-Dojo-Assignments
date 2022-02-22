import React from "react";
import './App.css';
import NumberWordComponent from './components/NumberWordComponent';
import HomeComponent from './components/HomeComponent';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Home = (props) => {
  return (
    <div>
        <h1 className="bold">Welcome</h1>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/:word" element={<NumberWordComponent />} />
          <Route path="/:word/:color/:bgCol" element={<NumberWordComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
