import {useState, useEffect} from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = (props) => {

    // STATES
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    // EFFECT-HOOKS
    useEffect(() => {
        console.log('effect')
      
        const eventHandler = response => {
          console.log('promise fulfilled')
          setNotes(response.data)
        }
      
        const promise = axios.get('http://localhost:3001/notes')
        promise.then(eventHandler)
      }, [])

    // EVENT HANDLERS
    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
          content: newNote,
          important: Math.random() < 0.5,
          id: String(notes.length + 1),
        }

        axios
        .post('http://localhost:3001/notes', noteObject)
        .then(response => {
          console.log(response)
          setNotes(notes.concat(noteObject))
          setNewNote('')
        })
      }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
      }


    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note =>
                    <Note key={note.id} note={note} />
                )}
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