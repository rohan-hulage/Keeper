import React from 'react';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import Note from './Note/note';
import notes from './notes'

function App() {
  return (
    <div>
      <Navbar />

      {notes.map((note) => (
          <Note 
            key={note.id}
            title={note.title}
            content={note.content}
          />
      ))}

      <Footer />
    </div>
  );
}

export default App;