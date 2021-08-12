import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(c) {
  return (
    <Card
      key={c.id}
      name={c.name}
      img={c.imgURL}
      tel={c.phone}
      email={c.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
