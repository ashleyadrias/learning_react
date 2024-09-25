const Note = (props) => {
    const note = props.note
    return (
      <li>{note.content}</li>
    )
  }
  
  export default Note