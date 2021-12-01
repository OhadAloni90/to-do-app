import NotesList from "./components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is default note",
    date: "15/02/2021"
  }
  
]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);


  useEffect(()=>{
    const saveNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if(saveNotes) {
      setNotes(saveNotes);
    }
  }
  ,[])

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString() + " " + date.getHours() + ":" + date.getMinutes()
    }
    const newNotes = [...notes, newNote];
  
    setNotes(newNotes);
  }

  const delNote = (id) => {
      const newNotesList = notes.filter((note)=> note.id !== id);
      setNotes(newNotesList);
  }

  return (
  <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes = {notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={delNote} />
    </div>
  </div>
  )
}

export default App;

