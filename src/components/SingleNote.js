import React from 'react'
import {MdDeleteForever} from 'react-icons/md';

export const SingleNote = ({id,text,date,handleDeleteNote}) => {
    return (
        <div className="single-note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever size="1.4rem" className="delete-icon" onClick={()=>handleDeleteNote(id)}/>
            </div>
        </div>
    )
}

export default SingleNote;