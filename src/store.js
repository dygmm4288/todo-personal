import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { TODO_STORAGE_KEY } from "./reducers/todoSlice";

export default configureStore({
  reducer: {
    todosReducer: todoReducer,
  },
  middleware: [middlewareStorage],
});

function middlewareStorage({ getState }) {
  return (next) => (action) => {
    next(action);
    const { todos } = getState().todosReducer;
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
  };
}
