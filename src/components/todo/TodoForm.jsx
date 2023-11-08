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
  return (
    <StyledForm className='box' onSubmit={handleSubmit}>
      <StyledInputContainer>
        <TodoFormInput
          inputRef={titleRef}
          label='제목'
          inputValue={title}
          handleChangeInputValue={handleTitleChange}
        />
        <TodoFormInput
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
`;
const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  input {
    color: black;
  }
`;
