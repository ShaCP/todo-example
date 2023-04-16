import {
  Todo,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  TodoActionTypes
} from "../types";

// Action creator to add a new todo item
export function addTodo(todo: Todo): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

// Action creator to toggle the completed state of a todo item
export function toggleTodo({ id }: { id: number }): TodoActionTypes {
  return {
    type: TOGGLE_TODO,
    payload: { id }
  };
}

// Action creator to delete a todo item
export function deleteTodo({ id }: { id: number }): TodoActionTypes {
  return {
    type: DELETE_TODO,
    payload: { id }
  };
}
