import styled from "styled-components";
import Header from "../../layout/todo/Header";
import Main from "../../layout/todo/Main";
import ApplicationWrapper from "../desktop/ApplicationWrapper";

export default function TodoApplication(props) {
  return (
    <ApplicationWrapper {...props}>
      <StyledTodoWrapper>
        <Header />
        <Main />
      </StyledTodoWrapper>
    </ApplicationWrapper>
  );
}

const StyledTodoWrapper = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 1rem;
  overflow-y: overlay;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    outline: none;
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    background-color: rgba(34, 34, 34, 0.6);
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }
`;
