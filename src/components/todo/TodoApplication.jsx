import Header from "../../layout/todo/Header";
import Main from "../../layout/todo/Main";
import ApplicationWrapper from "../desktop/ApplicationWrapper";

export default function TodoApplication(props) {
  return (
    <ApplicationWrapper {...props}>
      <Header />
      <Main />
    </ApplicationWrapper>
  );
}
