import React, { useState } from "react";

function ToDoItem(props) {
  const [isStrike, setStrike] = useState(false);

  function strikeItem(event) {
    setStrike((prevValue) => !prevValue);
  }

  return (
    <div>
      <li
        onClick={strikeItem}
        style={{ textDecoration: isStrike ? "line-through" : "none" }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
