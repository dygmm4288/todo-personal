import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  handleRemoveTodo,
  handleToggleTodo,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            {...todo}
            handleRemoveTodo={handleRemoveTodo}
            handleToggleTodo={handleToggleTodo}
          />
        </li>
      ))}
    </ul>
  );
}
