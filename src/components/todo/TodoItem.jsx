import React from "react";
import styled from "styled-components";
import { ReactComponent as StarSvg } from "../../assets/Star.svg";
import { ReactComponent as StarFillSvg } from "../../assets/StarFill.svg";
import { alter } from "../../lib/alter";
import TodoControlBtn from "./TodoControlBtn";

export const REMOVE = "remove";
export const TOGGLE = "toggle";

export default function TodoItem({
  id,
  title,
  content,
  isDone,
  isFavorite,
  handleCheckFavorite,
  handleRemoveTodo,
  handleToggleTodo,
}) {
  const ifIsDoneElse = alter(() => !!isDone);
  return (
    <StyledTodoWrapper className='box'>
      <h2>{title}</h2>
      <p>{content}</p>
      <StyledButtonContainer>
        <TodoControlBtn role={REMOVE} handleClickBtn={handleRemoveTodo(id)}>
          삭제하기
        </TodoControlBtn>
        <TodoControlBtn role={TOGGLE} handleClickBtn={handleToggleTodo(id)}>
          {ifIsDoneElse("취소", "완료")}
        </TodoControlBtn>
      </StyledButtonContainer>
      <StyledFavoriteWrapper onClick={handleCheckFavorite(id)}>
        {isFavorite ? <StarFillSvg /> : <StarSvg />}
      </StyledFavoriteWrapper>
    </StyledTodoWrapper>
  );
}

const StyledTodoWrapper = styled.section`
  width: 320px;
  min-height: 150px;
  /* border: 2px solid green; */

  padding: 1.5rem 1rem;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255, 0.3);
  backdrop-filter: blur(0.3rem);

  position: relative;

  &:hover {
    background-color: white;
  }

  h2 {
    margin: 0;
    padding: 0;
  }
`;

const StyledFavoriteWrapper = styled.div`
  position: absolute;
  right: 0.8rem;
  top: 0.8rem;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.5rem;
  justify-content: center;
`;
