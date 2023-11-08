import React from "react";
import styled from "styled-components";

export default function TodoThemeBtn({ children, handleToggleTheme }) {
  return (
    <StyledTodoThemeBtn onClick={handleToggleTheme} type='button'>
      {children}
    </StyledTodoThemeBtn>
  );
}
const StyledTodoThemeBtn = styled.button`
  width: 32px;
  height: 32px;
  padding: 2px;
  border-radius: 0.2rem;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
