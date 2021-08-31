import React, { useState } from "react";

function App() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");

  function displayFname(event) {
    setFname(event.target.value);
    console.log(event.target.value);
  }

  function displayLname(event) {
    setLname(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input name="fn" onChange={displayFname} placeholder="First Name" />
        <input name="ln" onChange={displayLname} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
