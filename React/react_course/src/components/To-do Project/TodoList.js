import React from "react";

const TodoList = (props) => {
  const handleRemove = (key) => {
    const newList = props.todoList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    props.updateListItem(newList);
  };

  return (
    <div>
      {props.todoList.map((itemObj, index) => {
        return (
          <div key={index}>
            <h2 style={{ display: "inline-block", marginRight: "20px" }}>
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
