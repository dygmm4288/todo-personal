import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  handleRemoveTodo,
  handleToggleTodo,
  handleCheckFavorite,
}) {
  return (
    <StyledTodoList>
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
    </StyledTodoList>
  );
}

const StyledTodoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
`;
