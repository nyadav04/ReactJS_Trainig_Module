import React from "react";
import { useState } from "react/cjs/react.development";
import TodoList from "./TodoList";

const Main = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { item: currentValue, key: Date.now() }]);
    setCurrentValue("");
  };
  //   console.log(todos);

  return (
    <div>
      <h1>To-do Project</h1>
      <input value={currentValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
      <TodoList todoList={todos} updateListItem={setTodos} />
    </div>
  );
};

export default Main;
