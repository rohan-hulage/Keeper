import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Note from './Note/Note';
import CreateArea from './CreateArea/createArea.jsx';

function App(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function handleNoteChange(event, id) {
    const { name, value } = event.target;
    setNotes(prevNotes =>
      prevNotes.map((noteItem, index) =>
        index === id ? { ...noteItem, [name]: value } : noteItem
      )
    );
  }

  function submitNote(event) {
    event.preventDefault();
    setNotes(prevNotes => [...prevNotes, note]);
    setNote({
      title: "",
      content: ""
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((noteItem, index) => index !== id));
  }

  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <CreateArea handleChange={handleChange} onSubmit={submitNote} note={note} />
        <div className="notes-container">
          {notes.map((noteItem, index) => (
            <Note
              handleChange={(event) => handleNoteChange(event, index)}
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;