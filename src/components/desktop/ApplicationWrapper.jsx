import { useEffect, useRef } from "react";
import {
  EXPAND_SIZE,
  REDUCE_SIZE,
} from "../../containers/desktop/DesktopFileContainer";

export default function ApplicationWrapper({
  children,
  handleCloseApplication,
  handleResizeApplication,
}) {
  const applicationWrapperRef = useRef(null);
  useEffect(() => {
    let timer = setTimeout(() => {
      applicationWrapperRef.current.classList.add("active");
    }, 10);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={applicationWrapperRef} className='application-wrapper'>
      <div className='application-header'>
        <div className='circle red' onClick={handleCloseApplication}></div>
        <div
          className='circle orange'
          onClick={handleResizeApplication(
            applicationWrapperRef,
            REDUCE_SIZE,
          )}></div>
        <div
          className='circle green'
          onClick={handleResizeApplication(
            applicationWrapperRef,
            EXPAND_SIZE,
          )}></div>
      </div>
      {children}
    </div>
  );
}
