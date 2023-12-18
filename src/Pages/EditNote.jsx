import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import useCreate from '../components/useCreate'

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams()
  const note = notes.find((item) => item.id == id)
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const date = useCreate()
  const navigate = useNavigate()

  const handleForm = (e) => {
   e.preventDefault()
    if (title && details) {
      const newNote = { ...note, title, details, date }
      const newNotes = notes.map((item) => {
        if (item.id == id) {
          item = newNote
        }
        return item
      })
      setNotes(newNotes)
    } else {
      return
    }
    navigate('/')
  }
  const handleDelete = () => {
    if (window.confirm('silmek istediğinize emin misiniz')) {
      const newNotes = notes.filter((item) => item.id != id)
      setNotes(newNotes)
      navigate('/')
    }
  }

  return (
    <section>
      <header className="create-note_header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          kaydet
        </button>
        <button className="btn lg danger" onClick={handleDelete}>
          <MdDelete />
        </button>
      </header>
      <form className="create-note_form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Başlık"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="not detayları..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  )
}
export default EditNote
