import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


const App = (props) => {
  //states
  //const [notes, setNotes] = useState(props.notes)
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

    const buttonLabel = showAll 
    ? 'important' 
    : 'all';

  // axios, api call, hooks
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  
  useEffect(hook, [])

  //event handlers
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleButtonClick = () => {
    setShowAll(!showAll);
  }

  // functions
  const renderNotes = () => {
    return notesToShow.map(note => (
      <Note key={note.id} note={note} />
    ))
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={handleButtonClick}>
          show {buttonLabel}
        </button>
      </div>
      <ul>
        {renderNotes()}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App