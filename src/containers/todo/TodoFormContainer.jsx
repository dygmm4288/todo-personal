import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../../components/todo/TodoForm";
import { addTodo } from "../../reducers/todoSlice";

export default function TodoFormContainer() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleRef = useRef(null);
  const dispatch = useDispatch();

  const cleanInputValue = () =>
    [setTitle, setContent].forEach((func) => func(""));

  const handleEnrollTodo = (title, content) => {
    if (!title || !content) return;
    dispatch(addTodo({ title, content }));
  };

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
