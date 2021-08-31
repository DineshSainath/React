import React, { useState } from "react";

function App() {
  const [fullName, setFullname] = useState({
    fName: "",
    lName: ""
  });

  function displayFname(event) {
    event.target.name === "fName"
      ? setFullname({ fName: event.target.value, lName: fullName.lName })
      : setFullname({ lName: event.target.value, fName: fullName.fName });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input name="fName" onChange={displayFname} placeholder="First Name" />
        <input name="lName" onChange={displayFname} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
