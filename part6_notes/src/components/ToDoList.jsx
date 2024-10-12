// components/TodoList.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/actions';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos); // Get todos from the Redux store
  const dispatch = useDispatch(); // Dispatch actions

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddTodo = () => {
    if (newTitle && newDescription) {
      dispatch(addTodo(newTitle, newDescription)); // Dispatch addTodo action
      setNewTitle('');
      setNewDescription('');
    }
  };

  return (
    <div className="container">
      <h1>Tasks</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button className="btn add-task-btn" onClick={handleAddTodo}>
        Add Task
      </button>

      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className={`list-group-item ${todo.completed ? 'completed' : ''}`}>
            <div>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </div>
            <div>
              <button className="btn complete-btn" onClick={() => dispatch(toggleTodo(index))}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button className="btn remove-btn" onClick={() => dispatch(removeTodo(index))}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;