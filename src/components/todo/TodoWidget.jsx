import React from "react";
import styled from "styled-components";
import { alterWithStyled } from "../../lib/alter";

export default function TodoWidget({
  title,
  content,
  isDone,
  handleToggleTodo,
  id,
}) {
  return (
    <StyledTodoWidgetWrapper onClick={handleToggleTodo(id)}>
      <input type='radio' checked={!!isDone} />
      <StyledTodoWidgetCotentWrapper checked={!!isDone}>
        <h4 className='widget-title'>{title}</h4>
        <p className='widget-content'>{content}</p>
      </StyledTodoWidgetCotentWrapper>
    </StyledTodoWidgetWrapper>
  );
}
const ifCheckedThan = alterWithStyled(({ checked }) => checked);
const StyledTodoWidgetWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  border-radius: 0.5rem;
  box-sizing: border-box;
  border: 1px solid black;
  padding: 0.5rem;
  * {
    padding: 0;
    margin: 0;
  }
  input {
    flex: 0.2;
  }
  cursor: pointer;
`;
const StyledTodoWidgetCotentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 50px;
  max-height: 80px;

  * {
    text-align: left;
    margin: 0;
    padding: 0;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  h4 {
    font-size: 0.8rem;
    ${ifCheckedThan("text-decoration:line-through", "")};
    color: ${ifCheckedThan("black", "lightgreen")};
  }
  p {
    font-size: 0.6rem;
  }
`;
