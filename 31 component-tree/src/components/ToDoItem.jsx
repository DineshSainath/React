import React from "react";

function ToDoItem(props) {
  function handleClick() {
    props.action(props.id);
  }

  return (
    <div>
      <li onClick={handleClick}>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
