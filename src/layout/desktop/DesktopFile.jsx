import { useEffect, useRef, useState } from "react";
import cn from "../../lib/cn";
import Header from "../todo/Header";
import Main from "../todo/Main";
import "./DesktopFile.css";

function DesktopFile({ children, SVG }) {
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
        <ApplicationWrapper handleCloseApplication={handleCloseApplication}>
          <Header />
          <Main />
        </ApplicationWrapper>
      )}
    </>
  );
}
function ApplicationWrapper({ children, handleCloseApplication }) {
  const applicationWrapperRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      applicationWrapperRef.current.classList.add("active");
    }, 10);
  }, []);

  return (
    <div ref={applicationWrapperRef} className='application-wrapper'>
      <div className='application-header'>
        <div className='circle red' onClick={handleCloseApplication}></div>
        <div className='circle orange'></div>
        <div className='circle green'></div>
      </div>
      {children}
    </div>
  );
}
function Icon({ handleClickIcon, SVG, isFocused, handleDbClick }) {
  return (
    <div
      className={cn("icon-svg", isFocused ? "active" : "")}
      onClick={handleClickIcon}
      onDoubleClick={handleDbClick}>
      <SVG />
    </div>
  );
}

function not(x) {
  return !x;
}

export default DesktopFile;
