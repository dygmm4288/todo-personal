import React from "react";
import styled from "styled-components";
import { alterWithStyled } from "../../lib/alter";
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
const getAElseB = alterWithStyled(({ role }) => role === REMOVE);

const StyledTodoControlBtn = styled.button`
  width: 40%;
  background-color: transparent;
  outline: none;
  text-align: center;
  transition: all 0.2s ease;
  border-style: solid;
  padding: 0.5rem 0.5rem;

  border-color: ${(props) => getAElseB("lightcoral", "lightgreen")(props)};
  &:hover {
    background-color: ${(props) =>
      getAElseB("lightcoral", "lightgreen")(props)};
    color: ${(props) => getAElseB("white", "")(props)};
  }
`;
