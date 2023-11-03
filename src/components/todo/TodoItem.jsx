import React from "react";
import TodoControlBtn from "./TodoControlBtn";

export default function TodoItem({
  id,
  title,
  content,
  isDone,
  handleRemoveTodo,
  handleToggleTodo,
}) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
      <TodoControlBtn role='remove' handleClickBtn={handleRemoveTodo(id)}>
        삭제하기
      </TodoControlBtn>
      <TodoControlBtn role='toggle' handleClickBtn={handleToggleTodo(id)}>
        {isDone ? "취소" : "완료"}
      </TodoControlBtn>
    </section>
  );
}
