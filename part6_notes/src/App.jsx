import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'; // Hooks for managing server state
import { getNotes, createNote, updateNote, deleteNote } from './services/requests'; // Functions for server interactions
import { useState } from 'react'; // Hook to manage component-level state

const App = () => {
  const queryClient = useQueryClient(); // Hook to interact with the React Query cache (queryClient is a hook)
  
  const [editingNoteId, setEditingNoteId] = useState(null); // useState hook to track which note is being edited (hook)
  const [editedContent, setEditedContent] = useState(''); // useState hook to store content of the note being edited (hook)

  // 1. Mutation for creating a new note (mutation is a function to modify server-side data)
  const newNoteMutation = useMutation({
    mutationFn: createNote, // Asynchronous request function (promise)
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] }); // Invalidate cache to refetch the data (after a mutation, this refetches data)
    },
  });

  // Event handler for adding a new note
  const addNote = async (event) => {
    event.preventDefault(); // Event handler (prevents page reload)
    const content = event.target.note.value; // Grabs input value from form
    event.target.note.value = ''; // Clears the form input
    newNoteMutation.mutate({ content, important: false, completed: false }); // Calls the mutation to add a new note
  };

  // 2. Mutation for updating a note's details
  const updateNoteMutation = useMutation({
    mutationFn: updateNote, // Async request function to update note (promise)
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] }); // Refetch the data after mutation
      setEditingNoteId(null); // Reset the editing mode once saved
    },
  });

  // Function to save the edited note
  const saveNote = (note) => {
    updateNoteMutation.mutate({ ...note, content: editedContent });
  };

  // 3. Mutation for deleting a note
  const deleteNoteMutation = useMutation({
    mutationFn: deleteNote, // Async request to delete the note (promise)
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] }); // Refetch the data after deletion
    },
  });

  // Event handler for toggling note importance (fires onClick)
  const toggleImportance = (note) => {
    updateNoteMutation.mutate({ ...note, important: !note.important }); // Toggle 'important' field
  };

  // Event handler for toggling note completion (fires onClick)
  const toggleCompletion = (note) => {
    updateNoteMutation.mutate({ ...note, completed: !note.completed }); // Toggle 'completed' field
  };

  // Event handler for deleting a note (fires onClick)
  const removeNote = (note) => {
    deleteNoteMutation.mutate(note.id); // Calls mutation to delete note by its ID
  };

  // useQuery hook for fetching data from the server (hook)
  const result = useQuery({
    queryKey: ['notes'], // Unique key for caching query results
    queryFn: getNotes, // Async function to fetch data (promise)
  });

  // Display loading state while fetching data
  if (result.isLoading) {
    return <div>Loading data...</div>;
  }

  const notes = result.data || []; // Response data (either fetched notes or empty array)

  return (
    <div>
      <h2>Notes App</h2>

      {/* Form for adding new notes */}
      <form onSubmit={addNote}> {/* Form submit event */}
        <input name="note" />
        <button type="submit">Add</button>
      </form>

      {/* List of notes */}
      <ul>
        {notes.map(note => (
          <li key={note.id} style={{ textDecoration: note.completed ? 'line-through' : 'none' }}>
            {editingNoteId === note.id ? (
              // Input field for editing the note
              <div>
                <input 
                  type="text" 
                  value={editedContent} 
                  onChange={(e) => setEditedContent(e.target.value)} // Updates content while editing
                />
                <button onClick={() => saveNote(note)}>Save</button> {/* Save button */}
              </div>
            ) : (
              <div>
                {/* Note content */}
                <span onClick={() => toggleImportance(note)}>
                  {note.content} 
                  <strong>{note.important ? 'important' : ''}</strong>
                </span>
                <button onClick={() => setEditingNoteId(note.id) && setEditedContent(note.content)}>Edit</button>
                
                {/* Completed button */}
                <button onClick={() => toggleCompletion(note)}>
                  {note.completed ? 'Unmark' : 'Completed'}
                </button>

                {/* Delete button */}
                <button onClick={() => removeNote(note)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;