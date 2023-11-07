import React from "react";
import { useSelector } from "react-redux";
import { selectMessage } from "../../reducers/todoSlice";
import { StyledFooter, StyledMessage } from "./TodoFooter.styles";
import TodoFooterInfo from "./TodoFooterInfo";

export default function TodoFooter() {
  const message = useSelector(selectMessage);
  return (
    <StyledFooter>
      <TodoFooterInfo />
      <StyledMessage>{message}</StyledMessage>
    </StyledFooter>
  );
}
