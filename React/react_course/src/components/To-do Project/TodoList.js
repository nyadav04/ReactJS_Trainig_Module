import React, { useState } from "react";

const TodoList = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleRemove = (key) => {
    const newList = props.todoList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    props.updateListItem(newList);
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    
  };

  return (
    <div>
      {props.todoList.map((itemObj, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              value="isCompleted"
              checked={isChecked}
              onClick={handleOnChange}
            />
            <h2
              style={{ display: "inline-block", marginRight: "20px" }}
              
            >
              {itemObj.item}
            </h2>
            <button onClick={() => handleRemove(itemObj.key)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
