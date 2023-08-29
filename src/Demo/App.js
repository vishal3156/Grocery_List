import React, { useState } from 'react';
import Square from './Square';
import Input from './Input';
import "../project/child.css"

function App() {
    const [colorValue, setColorValue] = useState("");
    const [clicked, setClicked] = useState(false);
  return (
    <div className='App'>
       <h1 className='heading'>Hello!</h1>
       <Square 
        colorValue={colorValue}
        clicked={clicked}
        setClicked={setClicked}
        />
       <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
         />
         <h3>{2 + 2}</h3>
    </div>
  )
}

export default App;