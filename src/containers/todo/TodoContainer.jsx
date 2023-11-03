import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../../components/todo/TodoList";
import {
  addTodo,
  deleteTodo,
  selectTodos,
  toggleTodo,
} from "../../reducers/todoSlice";
import TodoForm from "./TodoFormContainer";

export default function TodoContainer() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [doneTodos, workingTodos] = todos.reduce(
    (a, c) => {
      a[c.isDone ? 0 : 1].push(c);
      return a;
    },
    [[], []],
  );
  // 이벤트 핸들러
  const handleEnrollTodo = (title, content) => {
    if (!title || !content) return;

    const newTodo = {
      title,
      content,
      isDone: false,
      id: Date.now(),
    };
    dispatch(addTodo(newTodo));
  };

  const handleRemoveTodo = (id) => () => {
    dispatch(deleteTodo(id));
  };
  const handleToggleTodo = (id) => () => {
    dispatch(toggleTodo(id));
  };

  return (
    <>
      <TodoForm handleEnrollTodo={handleEnrollTodo} />
      <div>
        <h2>Working...🔥</h2>
        <TodoList
          todos={workingTodos}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
        />
        <h2>Done...!🎉</h2>
        <TodoList
          todos={doneTodos}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
        />
      </div>
    </>
  );
}
