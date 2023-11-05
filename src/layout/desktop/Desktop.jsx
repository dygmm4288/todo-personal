import { ReactComponent as TodoSvg } from "../../assets/icon.svg";
import DesktopFile from "../../containers/desktop/DesktopFileContainer";
import "./Desktop.css";

function Desktop() {
  return (
    <div id='desktop'>
      <DesktopFile SVG={TodoSvg} />
    </div>
  );
}

export default Desktop;
