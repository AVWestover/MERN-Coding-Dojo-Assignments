import React, { useState } from "react";
import './App.css';
import Form from './components/Form';
import Box from './components/Box'

function App() {
  const [boxes, setBoxes] = useState([]);

  const [boxDetails, setBoxDetails] = useState({
    color: "",
    size: "",
  })

  return (
    <div className="App">
      <Form
        boxDetails={ boxDetails }
        setBoxDetails={ setBoxDetails }
        boxes = { boxes }
        setBoxes={ setBoxes }
      />

      {
        boxes.map(box => <Box color={ box.color } size={ box.size }/>)
      }
    </div>
  );
}

export default App;
