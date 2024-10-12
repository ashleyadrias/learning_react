// redux/reducer.js
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { title: action.payload.title, description: action.payload.description, completed: false }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload), // Remove the to-do by filtering it out
      };
    default:
      return state;
  }
};

export default todoReducer;