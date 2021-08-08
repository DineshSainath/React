//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var text = " ";
const d = new Date().getHours();
console.log(d);

const heading = {
  color: "black"
};

if (d >= 12 && d < 18) {
  text = "Good Afternoon";
  heading.color = "red";
} else if (d >= 18 && d < 24) {
  text = "Good evening";
  heading.color = "green";
} else {
  text = "Good Morning";
  heading.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={heading}>
    {text}
  </h1>,
  document.getElementById("root")
);
