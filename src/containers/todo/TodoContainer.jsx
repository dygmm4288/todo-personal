import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as DarkThemeSvg } from "../../assets/DarkTheme.svg";
import { ReactComponent as LightThemeSvg } from "../../assets/LightTheme.svg";
import TodoFooter from "../../components/todo/TodoFooter";
import TodoList from "../../components/todo/TodoList";
import TodoThemeBtn from "../../components/todo/TodoThemeBtn";
import {
  LIGHT_THEME,
  selectTheme,
  toggleTheme,
} from "../../reducers/themeSlice";
import {
  deleteTodo,
  selectTodos,
  toggleFavorite,
  toggleTodo,
} from "../../reducers/todoSlice";
import TodoFormContainer from "./TodoFormContainer";
export default function TodoContainer() {
  const todos = useSelector(selectTodos);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const [doneTodos, workingTodos] = todos.reduce(
    (a, c) => {
      a[c.isDone ? 0 : 1].push(c);
      return a;
    },
    [[], []],
  );
  const handleRemoveTodo = (id) => () => {
    dispatch(deleteTodo(id));
  };
  const handleToggleTodo = (id) => () => {
    dispatch(toggleTodo(id));
  };
  const handleCheckFavorite = (id) => () => {
    dispatch(toggleFavorite(id));
  };
  const handleToggleTheme = () => {
    dispatch(toggleTheme);
  };

  return (
    <>
      <TodoFormContainer />
      <StyledTodoContentWrapper>
        <h2>Working...🔥</h2>
        <TodoList
          todos={workingTodos}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
          handleCheckFavorite={handleCheckFavorite}
        />
        <h2>Done...!🎉</h2>
        <TodoList
          todos={doneTodos}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
          handleCheckFavorite={handleCheckFavorite}
        />
        <TodoThemeBtn handleToggleTheme={handleToggleTheme}>
          {theme === LIGHT_THEME ? <LightThemeSvg /> : <DarkThemeSvg />}
        </TodoThemeBtn>
      </StyledTodoContentWrapper>
      <TodoFooter />
    </>
  );
}
const StyledTodoContentWrapper = styled.div`
  position: relative;
`;
