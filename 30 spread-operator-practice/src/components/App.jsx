import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
// const items = [];
function App() {
  const [input, setInput] = useState("");
  const [items, setItem] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function addItem(event) {
    setItem((prevItems) => {
      return [...prevItems, input];
    });
    // items.push(input);
    setInput("");
    // setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={input} onChange={handleChange} name="item" type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
