import styled from "styled-components";
import { ReactComponent as TodoSvg } from "../../assets/icon.svg";
import TodoApplication from "../../components/todo/TodoApplication";
import DesktopFileContainer from "../../containers/desktop/DesktopFileContainer";
import WidgetContainer from "../../containers/desktop/WidgetContainer";
import "./Desktop.css";
function Desktop() {
  return (
    <StyledDesktop>
      <DesktopFileContainer
        SVG={TodoSvg}
        ApplicationWrapper={TodoApplication}
      />
      <div id='widget-wrapper'>
        <WidgetContainer />
      </div>
    </StyledDesktop>
  );
}

const StyledDesktop = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
`;

export default Desktop;
