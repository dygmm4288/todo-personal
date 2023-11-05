import cn from "../../lib/cn";

export default function Icon({
  handleClickIcon,
  SVG,
  isFocused,
  handleDbClick,
}) {
  return (
    <div
      className={cn("icon-svg", isFocused ? "active" : "")}
      onClick={handleClickIcon}
      onDoubleClick={handleDbClick}>
      <SVG />
    </div>
  );
}
