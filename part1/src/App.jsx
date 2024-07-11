const App = (props) => {
  const { notes } = props

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
        {notes.map((note,index) => <li key={note.id}>{note.content}</li>)}
      </ul>
    </div>
  )
}

export default App