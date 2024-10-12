// redux/actions.js
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO'; // New action

export const addTodo = (title, description) => {
  return {
    type: ADD_TODO,
    payload: {
      title,
      description,
    },
  };
};

export const toggleTodo = (index) => {
  return {
    type: TOGGLE_TODO,
    payload: index,
  };
};

export const removeTodo = (index) => {  // New action creator for removing a to-do
  return {
    type: REMOVE_TODO,
    payload: index,
  };
};