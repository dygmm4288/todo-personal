import Header from "../../layout/todo/Header";
import Main from "../../layout/todo/Main";
import ApplicationWrapper from "../desktop/ApplicationWrapper";
import "./TodoApplication.css";

export default function TodoApplication(props) {
  return (
    <ApplicationWrapper {...props}>
      <div id='todo-wrapper'>
        <Header />
        <Main />
      </div>
    </ApplicationWrapper>
  );
}