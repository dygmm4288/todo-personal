import { ReactComponent as TodoSvg } from "../../assets/icon.svg";
import "./Desktop.css";
import DesktopFile from "./DesktopFile";

function Desktop() {
  return (
    <div id='desktop'>
      <DesktopFile SVG={TodoSvg} />
    </div>
  );
}

export default Desktop;
