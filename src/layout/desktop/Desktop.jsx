import { ReactComponent as TodoSvg } from "../../assets/icon.svg";
import TodoApplication from "../../components/todo/TodoApplication";
import DesktopFileContainer from "../../containers/desktop/DesktopFileContainer";
import WidgetContainer from "../../containers/desktop/WidgetContainer";
import "./Desktop.css";
function Desktop() {
  return (
    <div id='desktop'>
      <DesktopFileContainer
        SVG={TodoSvg}
        ApplicationWrapper={TodoApplication}
      />
      <div id='widget-wrapper'>
        <WidgetContainer />
      </div>
    </div>
  );
}

export default Desktop;
