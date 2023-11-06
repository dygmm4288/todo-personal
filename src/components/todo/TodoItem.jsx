import React from "react";
import { ReactComponent as StarSvg } from "../../assets/Star.svg";
import { ReactComponent as StarFillSvg } from "../../assets/StarFill.svg";
import TodoControlBtn from "./TodoControlBtn";

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
  return (
    <section className='box'>
      <h2>{title}</h2>
      <p>{content}</p>
      <div className='btn-container'>
        <TodoControlBtn role='remove' handleClickBtn={handleRemoveTodo(id)}>
          삭제하기
        </TodoControlBtn>
        <TodoControlBtn role='toggle' handleClickBtn={handleToggleTodo(id)}>
          {isDone ? "취소" : "완료"}
        </TodoControlBtn>
      </div>
      <div className='favorite-wrapper' onClick={handleCheckFavorite(id)}>
        {isFavorite ? <StarFillSvg /> : <StarSvg />}
      </div>
    </section>
  );
}
