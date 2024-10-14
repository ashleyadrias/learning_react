import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

// Get notes
export const getNotes = () =>
  axios.get(baseUrl).then(res => res.data)

// Create a new note
export const createNote = newNote =>
  axios.post(baseUrl, newNote).then(res => res.data)

// Update note by ID
export const updateNote = updatedNote =>
  axios.put(`${baseUrl}/${updatedNote.id}`, updatedNote).then(res => res.data)

// Delete note by ID
export const deleteNote = async (id) => {
  const response = await axios.delete(`http://localhost:3001/notes/${id}`); // Change URL to match your server
  return response.data;
};