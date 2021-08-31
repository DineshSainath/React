import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateForm(event) {
    if (event.target.name === "fName")
      setContact({
        fName: event.target.value,
        lName: contact.lName,
        email: contact.email
      });
    else if (event.target.name === "lName")
      setContact({
        fName: contact.fName,
        lName: event.target.value,
        email: contact.email
      });
    else
      setContact({
        fName: contact.fName,
        lName: contact.lName,
        email: event.target.value
      });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          value={contact.fName}
          onChange={updateForm}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={contact.lName}
          onChange={updateForm}
          name="lName"
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          onChange={updateForm}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
