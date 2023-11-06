import { createSlice } from "@reduxjs/toolkit";
export const TODO_STORAGE_KEY = "todos";
const initialState = {
  todos: JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || [],
};
const findById = (id) => (todo) => todo.id === id;
const filterById = (id) => (todo) => todo.id !== id;
const todoSlice = createSlice({
  name: "todoReducer",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare: function ({ title, content }) {
        return {
          payload: {
            title,
            content,
            id: Date.now(),
            isDone: false,
            isFavorite: false,
          },
        };
      },
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(filterById(action.payload));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(findById(action.payload));
      todo.isDone = !todo.isDone;
    },
    toggleFavorite: (state, action) => {
      const todo = state.todos.find(findById(action.payload));
      todo.isFavorite = !todo.isFavorite;
    },
  },
});
export const { addTodo, deleteTodo, toggleTodo, toggleFavorite } =
  todoSlice.actions;
export const selectTodos = (state) => state.todosReducer.todos;

export default todoSlice.reducer;
