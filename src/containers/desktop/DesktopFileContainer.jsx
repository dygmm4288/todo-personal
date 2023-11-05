import { useState } from "react";
import DesktopFile from "../../components/desktop/DesktopFile";

export const REDUCE_SIZE = "reduce";
export const EXPAND_SIZE = "expand";

function DesktopFileContainer({ SVG, ApplicationWrapper }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickIcon = () => {
    setIsFocused(not);
  };
  const handleDbClick = () => {
    setIsOpen(not);
  };
  const handleCloseApplication = () => {
    setIsOpen(not);
  };
  const handleResizeApplication = (applicationRef, type) => () => {
    if (type === EXPAND_SIZE) {
      applicationRef.current.classList.add("full-size");
      return;
    }
    applicationRef.current.classList.remove("full-size");
  };
  return (
    <DesktopFile
      isOpen={isOpen}
      SVG={SVG}
      handleClickIcon={handleClickIcon}
      handle
      handleDbClick={handleDbClick}
      isFocused={isFocused}>
      <ApplicationWrapper
        handleCloseApplication={handleCloseApplication}
        handleResizeApplication={handleResizeApplication}
      />
    </DesktopFile>
  );
}

function not(x) {
  return !x;
}

export default DesktopFileContainer;
