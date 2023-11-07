import styled from "styled-components";
import { alterWithStyled } from "../../lib/alter";

export default function Icon({
  handleClickIcon,
  SVG,
  isFocused,
  handleDbClick,
}) {
  return (
    <StyledIcon
      isFocused={isFocused}
      onClick={handleClickIcon}
      onDoubleClick={handleDbClick}>
      <SVG />
    </StyledIcon>
  );
}
const getAElseB = alterWithStyled(({ isFocused }) => !!isFocused);
const StyledIcon = styled.div`
  z-index: 99;
  rect {
    fill: ${(props) =>
      getAElseB("rgba(255, 255, 255, 0.3)", "transparent")(props)};
  }
`;
