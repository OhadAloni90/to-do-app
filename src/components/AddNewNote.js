import React from 'react'


export const AddNewNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = React.useState('');
    const characterLimit = 200;
    let notesLeft = characterLimit - noteText.length;
    const handleChange = (e) => {
        if(characterLimit - e.target.value.length >=0) {
            setNoteText(e.target.value)};
         
    }

    const handleSave = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');    
        }
    }
    return (
        <div className="single-note new">
            <textarea rows="8" col="10" placeholder="Enter text here to create a new note..." onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <small>{notesLeft}</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
export default AddNewNote;