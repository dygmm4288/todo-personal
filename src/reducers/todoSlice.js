import { createSlice } from "@reduxjs/toolkit";
export const TODO_STORAGE_KEY = "todos";
const initialState = {
  todos: JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || [],
  message: "",
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
        state.message = `🔥 'WORKING...' 그룹에 "${action.payload.title}"가 추가되었습니다.`;
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
    //TODO: 여기 코드 리팩토링 해야됨
    deleteTodo: (state, action) => {
      const todo = state.todos.find(findById(action.payload));
      state.todos = state.todos.filter(filterById(action.payload));
      state.message = `🗑️ "${todo.title}"가 삭제되었습니다...`;
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(findById(action.payload));
      todo.isDone = !todo.isDone;
      if (todo.isDone) {
        state.message = ` ✅ 'Working...' 그룹의 "${todo.title}" 항목이 완료되었습니다.`;
      } else {
        state.message = `🔥 'Done...' 그룹에 "${todo.title}" 항목이 추가되었습니다.`;
      }
    },
    toggleFavorite: (state, action) => {
      const todo = state.todos.find(findById(action.payload));
      todo.isFavorite = !todo.isFavorite;
      if (todo.isFavorite) {
        state.message = `⭐ "${todo.title}" 항목이 즐겨찾기에 추가됐습니다..`;
      } else {
        state.message = `⭐ "${todo.title}" 항목이 즐겨찾기에서 제거됐습니다.`;
      }
    },
  },
});
export const { addTodo, deleteTodo, toggleTodo, toggleFavorite } =
  todoSlice.actions;
export const selectTodos = (state) => state.todosReducer.todos;
export const selectCount = (state) =>
  state.todosReducer.todos.reduce(
    (a, c) => {
      if (c.isDone) {
        a.done += 1;
      } else {
        a.working += 1;
      }
      a.total += 1;
      return a;
    },
    { done: 0, working: 0, total: 0 },
  );
export const selectMessage = (state) => state.todosReducer.message;

export default todoSlice.reducer;
