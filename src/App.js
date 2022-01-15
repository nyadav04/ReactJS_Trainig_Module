import React, { useRef } from "react";
import Input from './Components/Input'

const App = () => {
  const myRef = useRef(null);

  const handleClick = () => {
    myRef.current.focus()
  }
  return (
    <div>
    <h2>Adding Ref to DOM element</h2>  
      <Input ref={myRef} />
      <button onClick={handleClick}>
          Click here to add text
        </button>
    </div>
  );
}

export default App;