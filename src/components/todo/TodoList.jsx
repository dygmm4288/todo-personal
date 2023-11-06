import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({
  todos,
  handleRemoveTodo,
  handleToggleTodo,
  handleCheckFavorite,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            {...todo}
            handleRemoveTodo={handleRemoveTodo}
            handleToggleTodo={handleToggleTodo}
            handleCheckFavorite={handleCheckFavorite}
          />
        </li>
      ))}
    </ul>
  );
}
