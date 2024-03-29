import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Notes from './Pages/Notes'
import CreateNote from './Pages/CreateNote'
import EditNote from './Pages/EditNote'
import { useEffect, useState } from 'react'

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || [],
  )

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
