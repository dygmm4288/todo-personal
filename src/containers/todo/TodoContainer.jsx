import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../../components/todo/TodoList";
import {
  deleteTodo,
  selectTodos,
  toggleFavorite,
  toggleTodo,
} from "../../reducers/todoSlice";
import TodoFormContainer from "./TodoFormContainer";

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

  const handleRemoveTodo = (id) => () => {
    dispatch(deleteTodo(id));
  };
  const handleToggleTodo = (id) => () => {
    dispatch(toggleTodo(id));
  };
  const handleCheckFavorite = (id) => () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <>
      <TodoFormContainer />
      <div>
        <h2>Working...🔥</h2>
        <TodoList
          todos={workingTodos}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
          handleCheckFavorite={handleCheckFavorite}
        />
        <h2>Done...!🎉</h2>
        <TodoList
          todos={doneTodos}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
          handleCheckFavorite={handleCheckFavorite}
        />
      </div>
    </>
  );
}
