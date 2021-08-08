import React from "react";
import ReactDOM from "react-dom";

const name = "DS";
const lname = "01";
const no = Math.floor(Math.random() * 11);

ReactDOM.render(
  <div>
    <h1>
      Hello {name} {lname}!
    </h1>
    <p> Your lucky number is {no} </p>
  </div>,
  document.getElementById("root")
);
