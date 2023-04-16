import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";

// Initialize the Redux store with the root reducer
const store = createStore(rootReducer);

// Render the App component inside the Provider component,
// which makes the Redux store available to all child components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
