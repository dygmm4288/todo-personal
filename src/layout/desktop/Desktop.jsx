import { ReactComponent as TodoSvg } from "../../assets/icon.svg";
import TodoApplication from "../../components/todo/TodoApplication";
import DesktopFileContainer from "../../containers/desktop/DesktopFileContainer";
import "./Desktop.css";
function Desktop() {
  return (
    <div id='desktop'>
      <DesktopFileContainer
        SVG={TodoSvg}
        ApplicationWrapper={TodoApplication}
      />
    </div>
  );
}

export default Desktop;
