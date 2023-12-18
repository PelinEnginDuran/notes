import React from "react";
import { Link } from "react-router-dom";

const NoteItem =({note})=>{
    if(!note){
        return null
    }
    
    return (
    <Link to={`/edit-note/${note.id}`} className="note">
    <h4>
        {note.title.length > 30 ? note.title.substr(0, 30) + "..." : note.title}
    </h4>
    <p>{note.date}</p>

    </Link>)
}
export default NoteItem