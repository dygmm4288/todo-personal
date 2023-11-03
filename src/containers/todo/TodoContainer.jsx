import React, { useState } from "react";
import TodoList from "../../components/todo/TodoList";
import useStorage from "../../lib/useStorage";
import TodoForm from "./TodoForm";

const TODO_STORAGE_KEY = "todos";

export default function TodoContainer() {
  const [getStorage, setStorage] = useStorage([], TODO_STORAGE_KEY);
  const [todos, setTodos] = useState(getStorage());
  const [doneTodos, workingTodos] = todos.reduce(
    (a, c) => {
      a[c.isDone ? 0 : 1].push(c);
      return a;
    },
    [[], []],
  );

  const reflectTodos = (nextTodos) => {
    setTodos(nextTodos);
    setStorage(nextTodos);
  };
  // 이벤트 핸들러
  const handleEnrollTodo = (title, content) => {
    if (!title || !content) return;

    const newTodo = {
      title,
      content,
      isDone: false,
      id: Date.now(),
    };
    reflectTodos(todos.concat(newTodo));
  };

  const handleRemoveTodo = (id) => () => {
    reflectTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleToggleTodo = (id) => () => {
    reflectTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return { ...todo };
      }),
    );
  };

  return (
    <>
      <TodoForm handleEnrollTodo={handleEnrollTodo} />
      <div>
        <h2>working...불꽃</h2>
        <TodoList
          todos={workingTodos}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
        />
        <h2>Done...!폭죽</h2>
        <TodoList
          todos={doneTodos}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
        />
      </div>
    </>
  );
}

const concat = (prev, next) => prev.concat(next);
