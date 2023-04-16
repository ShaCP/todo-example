import { createStore } from "redux";
import { TodoActionTypes, TodoState, ADD_TODO, TOGGLE_TODO } from "./types";

const initialState: TodoState = {
  todos: []
};

function reducer(state = initialState, action: TodoActionTypes): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
