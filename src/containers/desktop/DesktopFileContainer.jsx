import { useEffect, useRef, useState } from "react";
import DesktopFile from "../../components/desktop/DesktopFile";
import Header from "../../layout/todo/Header";
import Main from "../../layout/todo/Main";

function DesktopFileContainer({ SVG }) {
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
        handleResizeApplication={handleResizeApplication}>
        <Header />
        <Main />
      </ApplicationWrapper>
    </DesktopFile>
  );
}
function ApplicationWrapper({
  children,
  handleCloseApplication,
  handleResizeApplication,
}) {
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
        <div
          className='circle orange'
          onClick={handleResizeApplication(applicationWrapperRef)}></div>
        <div
          className='circle green'
          onClick={handleResizeApplication(applicationWrapperRef)}></div>
      </div>
      {children}
    </div>
  );
}

function not(x) {
  return !x;
}

export default DesktopFileContainer;
