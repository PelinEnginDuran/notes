import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import notes from "../dummy_note"
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa";


const Notes =({notes})=>{

    const[showSearch,setShowSearch]=useState(false)
    const [text,setText]=useState("") 
    const[filteredNotes,setFilteredNotes]=useState(notes)
    const handleSearch=()=>{
        setFilteredNotes(
            notes.filter((note)=>{
                if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
                    return note
                }
            })
        )
    }
    useEffect(handleSearch, [text])
    return (
    
    <section className="container">
        <header className="notes_header">
            {!showSearch && <h2>NOTLARIM</h2>}
            {showSearch && (
            <input type="text" placeholder="birşeyler yaz.." onChange={(e)=>{
                setText(e.target.value)
                handleSearch()
            }}/>)}
           <button className="btn" onClick={()=>setShowSearch((prevState)=>!prevState)}> 
           {showSearch? <IoIosClose /> : <CiSearch />}
           </button>

        

        </header>
        <div className="notes__container">
            {filteredNotes.length == 0 && (
            <p className="empty-notes">Not Eklemek İster Misiniz?</p>)}
            {filteredNotes.map((note)=>(
                <NoteItem key={note.id} note={note}/>
            ))}

        </div>
        <Link className="btn add__btn" to="create-note">
        <FaPlus />
        </Link>
    </section>
    ) 
}
export default Notes