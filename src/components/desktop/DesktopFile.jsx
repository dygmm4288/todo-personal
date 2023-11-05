import React from "react";
import Icon from "./Icon";

export default function DesktopFile({
  isOpen,
  SVG,
  isFocused,
  handleClickIcon,
  handleDbClick,
  children,
}) {
  return (
    <>
      {!isOpen ? (
        <Icon
          SVG={SVG}
          isFocused={isFocused}
          handleClickIcon={handleClickIcon}
          handleDbClick={handleDbClick}
        />
      ) : (
        children
      )}
    </>
  );
}
