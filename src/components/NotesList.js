import React from 'react'
import AddNewNote from './AddNewNote';
import { SingleNote } from './SingleNote';

export const NotesList = ( {notes, handleAddNote,handleDeleteNote,handleEditing}) => {
    
    return (
        <div class="notes-lst">
            {notes.map((note)=> {
            const {id, text, date} = note;
            return (
              
              <SingleNote id={id} text={text} date={date} handleDeleteNote={handleDeleteNote} handleIsEditing={handleEditing}/>
             ) 
            })}
                <AddNewNote handleAddNote={handleAddNote}/>

        </div>
    )
}

export default NotesList;
