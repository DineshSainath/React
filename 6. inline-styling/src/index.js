import React from "react";
import ReactDOM from "react-dom";

const h1Style = {
  color: "red",
  size: "40 px",
  border: "5px solid black"
};

h1Style.color = "blue";

ReactDOM.render(
  <h1 style={h1Style}>Hello World!</h1>,
  document.getElementById("root")
);
