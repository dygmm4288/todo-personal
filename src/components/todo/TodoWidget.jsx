import React from "react";

export default function TodoWidget({
  title,
  content,
  isDone,
  handleToggleTodo,
  id,
}) {
  return (
    <div onClick={handleToggleTodo(id)}>
      <input type='radio' checked={!!isDone} />
      <h4 className='widget-title'>{title}</h4>
      <p className='widget-content'>{content}</p>
    </div>
  );
}
