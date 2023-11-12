//TODO: 컬러 팔레트 이용해서 색깔 픽하면 그것대로 나올 수 있게끔 구조를 짜야한다.
//TODO: drag and drop library 적용
import React from "react";
import styled from "styled-components";
import { alterWithStyled } from "../../lib/alter";
import withDraggableWidget from "../desktop/withDraggableWidget";
import withDroppableWidget from "../desktop/withDroppableWidget";

function TodoWidget({ title, content, isDone }) {
  return (
    <StyledTodoWidgetWrapper>
      <StyledTodoWidgetCotentWrapper checked={!!isDone}>
        <h4 className='widget-title'>{title}</h4>
        <p className='widget-content'>{content}</p>
      </StyledTodoWidgetCotentWrapper>
    </StyledTodoWidgetWrapper>
  );
}
export default withDroppableWidget(withDraggableWidget(TodoWidget));
const ifCheckedThan = alterWithStyled(({ checked }) => checked);
const StyledTodoWidgetWrapper = styled.div`
  width: 100%;
  min-height: 300px;

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
