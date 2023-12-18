import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { v4 as uuid } from "uuid";
import useCreate from "../components/useCreate";


const CreateNote =({ setNotes })=>{
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const date=useCreate()
    const navigate = useNavigate()
    

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(title && details){
            const note ={
                id: uuid(),
                title,
                details,
                date,
            }
            setNotes((prevNotes)=>[note, ...prevNotes])
            navigate("/")

        }
    }
    return(
         <section>
        <header className="create-note_header">
            <Link to={"/"} className="btn">
            <IoIosArrowBack />
            </Link>
            <button className="btn lg primary" onClick={handleSubmit}>kaydet</button>
        </header>
        <form className="create-note_form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Başlık" autoFocus
             value={title || ""} onChange={(e)=>setTitle(e.target.value)} />
            <textarea rows="28" placeholder="not detayları..."
             value={details || ""} onChange={(e)=>setDetails(e.target.value)}></textarea>
        </form>
    </section>)
}
export default CreateNote