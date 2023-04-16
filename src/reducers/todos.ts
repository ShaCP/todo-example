import { TodoActionTypes, TodoState, Todo } from "../types";

const initialState: TodoState = {
  todos: []
};

function todosReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload]
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo: Todo) => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
}

export default todosReducer;
