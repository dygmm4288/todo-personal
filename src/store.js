import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { TODO_STORAGE_KEY } from "./reducers/todoSlice";

export default configureStore({
  reducer: {
    todosReducer: todoReducer,
  },
  middleware: [middlewareStorage],
});

function middlewareStorage(store) {
  return function (next) {
    return function (action) {
      const result = next(action);
      const { todos } = store.getState().todosReducer;
      localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
      return result;
    };
  };
}
