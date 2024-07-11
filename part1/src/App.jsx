import Note from './components/Note'
import Course from './components/Course'

const App = (props) => {
  const notes = props.notes

  return (
    <div>
      <h1>Notes</h1>
      <p>displayed by manually listing out each note</p>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
        </ul>

      <h1>Notes</h1>
      <p>displayed using map</p>
      <ul>
        {notes.map(note => <Note key={note.id} note={note} />)}
      </ul>

      <Course course={props.course}/>
    </div>
  )
}

export default App