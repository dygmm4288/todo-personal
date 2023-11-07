import React from "react";
import styled from "styled-components";
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
    <StyledForm className='box' onSubmit={handleSubmit}>
      <StyledInputContainer>
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
      </StyledInputContainer>
      <button className='box' type='submit'>
        추가하기
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  padding: 2rem 1rem;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: green;
    color: white;
    outline: none;
    border: none;
    padding: 0.5rem 3rem;
  }

  button:hover {
    background-color: lightgreen;
  }
  input.border-red:focus {
    border-color: lightcoral;
  }
  input.border-green:focus {
    border-color: lightgreen;
  }
`;
const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  label {
    margin-right: 0.5rem;
  }
  input {
    outline: none;
    padding: 0.5rem 0.25rem;
    border: 2px solid;
    border-color: transparent;
    box-sizing: border-box;
  }
`;
