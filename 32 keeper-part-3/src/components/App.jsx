import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // console.log(note);
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(key) {
    // console.log(notes[key]);
    setNotes(notes.filter((notes, index) => key !== index));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          action={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
