import { createSlice } from "@reduxjs/toolkit";
export const TODO_STORAGE_KEY = "todos";
const initialState = {
  todos: JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || [],
};
const findById = (id) => (todo) => todo.id === id;
const todoSlice = createSlice({
  name: "todoReducer",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(findById(action.payload));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(findById(action.payload));
      todo.isDone = !todo.isDone;
    },
  },
});
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todosReducer.todos;

export default todoSlice.reducer;
