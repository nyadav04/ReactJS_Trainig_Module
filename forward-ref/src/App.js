import "./App.css";
import InputForm from "./InputForm";
import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const getValues = () => {
    alert(inputRef.current.value);
  };

  return (
    <div className="App">
      <h1>Forward Ref</h1>
      <InputForm ref={inputRef} />
      <br />
      <br />
      <button onClick={getValues} className="btn btn-primary">
        Click me
      </button>
    </div>
  );
}

export default App;
