import { useState } from "react";
import DesktopFile from "../../components/desktop/DesktopFile";

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
  const handleResizeApplication = (applicationRef) => () => {
    applicationRef.current.classList.toggle("full-size");
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
