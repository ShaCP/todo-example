import { combineReducers } from "redux";
import todos from "./todos";

// Combine the todos reducer into a single root reducer
const rootReducer = combineReducers({
  todos
});

export default rootReducer;
