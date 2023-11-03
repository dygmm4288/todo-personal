import React, { useRef, useState } from "react";
import TodoForm from "../../components/todo/TodoForm";

export default function TodoFormContainer({ handleEnrollTodo }) {
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
    <TodoForm
      title={title}
      content={content}
      handleSubmit={handleSubmit}
      titleRef={titleRef}
      handleTitleChange={handleChange(setTitle)}
      handleContentChange={handleChange(setContent)}
    />
  );
}
