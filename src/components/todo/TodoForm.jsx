import React from "react";
import "./TodoForm.css";
import TodoFormInput from "./TodoFormInput";

export default function TodoForm({
  handleSubmit,
  titleRef,
  handleTitleChange,
  handleContentChange,
  title,
  content,
}) {
  const ifEmptyThen = (str) =>
    str.length === 0 ? "border-red" : "border-green";
  return (
    <form className='box' onSubmit={handleSubmit}>
      <div className='input-container'>
        <TodoFormInput
          className={ifEmptyThen(title)}
          inputRef={titleRef}
          label='제목'
          inputValue={title}
          handleChangeInputValue={handleTitleChange}
        />
        <TodoFormInput
          className={ifEmptyThen(content)}
          label='내용'
          inputValue={content}
          handleChangeInputValue={handleContentChange}
        />
      </div>
      <button className='box' type='submit'>
        추가하기
      </button>
    </form>
  );
}
