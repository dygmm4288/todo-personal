import React, { useRef, useState } from "react";

export default function TodoForm({ handleEnrollTodo }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleRef = useRef(null);

  const cleanInputValue = () =>
    [setTitle, setContent].forEach((func) => func(""));

  const handleChange = (setter) => (e) => setter(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    handleEnrollTodo(title, content);
    cleanInputValue();
    titleRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TodoInput
        inputRef={titleRef}
        label='제목'
        inputValue={title}
        handleChangeInputValue={handleChange(setTitle)}
      />
      <TodoInput
        label='내용'
        inputValue={content}
        handleChangeInputValue={handleChange(setContent)}
      />
      <button type='submit'>추가하기</button>
    </form>
  );
}

function TodoInput({ inputRef, label, inputValue, handleChangeInputValue }) {
  return (
    <>
      <label>{label}</label>
      <input
        ref={inputRef}
        type='text'
        value={inputValue}
        onChange={handleChangeInputValue}
        required
      />
    </>
  );
}
