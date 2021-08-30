import React, { useState } from "react";

function App() {
  const [headerText, setHtext] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function clicked() {
    setHtext("Submitted");
  }

  function hoverOn() {
    setMouseOver(true);
  }

  function hoverOff() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headerText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={clicked}
        style={{
          backgroundColor: isMouseOver ? "black" : "white"
        }}
        onMouseOver={hoverOn}
        onMouseOut={hoverOff}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
