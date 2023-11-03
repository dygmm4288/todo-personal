import React, { useState } from "react";

export default function TodoForm({ handleEnrollTodo }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (setter) => (e) => setter(e.target.value);

  return (
    <form onSubmit={handleEnrollTodo(title, content)}>
      <TodoInput
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

function TodoInput({ label, inputValue, handleChangeInputValue }) {
  return (
    <>
      <label>{label}</label>
      <input
        type='text'
        value={inputValue}
        onChange={handleChangeInputValue}
        required
      />
    </>
  );
}
