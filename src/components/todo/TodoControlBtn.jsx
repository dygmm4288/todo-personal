import React from "react";
import styled from "styled-components";
import { REMOVE } from "./TodoItem";

export default function TodoControlBtn({ role, handleClickBtn, children }) {
  return (
    <StyledTodoControlBtn
      role={role}
      className='box'
      type='button'
      onClick={handleClickBtn}>
      {children}
    </StyledTodoControlBtn>
  );
}

const getAElseB =
  (a, b) =>
  ({ role }) =>
    role === REMOVE ? a : b;

const StyledTodoControlBtn = styled.button`
  width: 40%;
  background-color: transparent;
  outline: none;
  text-align: center;
  transition: all 0.2s ease;
  border-style: solid;
  padding: 0.5rem 0.5rem;

  border-color: ${getAElseB("lightcoral", "lightgreen")};
  &:hover {
    background-color: ${getAElseB("lightcoral", "lightgreen")};
    color: ${getAElseB("white", "")};
  }
`;
