import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../actions";
import { Todo, RootState } from "../types";
import "../App.css";

function App() {
  // Declare local state to store the current input text
  const [text, setText] = useState("");

  // Get the current state of the todos array from the Redux store
  const todos = useSelector((state: RootState) => state.todos.todos);

  // Create a dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Event handler for form submission
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Prevent the default form submission behavior
    e.preventDefault();
    // If the input text is not empty, dispatch an action to add a new todo item to the Redux store
    if (text.trim()) {
      dispatch(addTodo({ id: todos.length + 1, text, completed: false }));
      // Reset the input text state to an empty string
      setText("");
    }
  }

  // Event handler for toggling the completed state of a todo item
  function handleToggle(todo: Todo) {
    dispatch(toggleTodo({ id: todo.id }));
  }

  // Event handler for deleting a todo item
  function handleDelete(todo: Todo) {
    dispatch(deleteTodo({ id: todo.id }));
  }

  // Render the App component with JSX
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a todo..."
          value={text}
          // Update the input text state when the input value changes
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              // Toggle the completed state of the todo item when the checkbox is clicked
              onChange={() => handleToggle(todo)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
