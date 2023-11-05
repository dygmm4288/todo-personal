import { useEffect, useRef } from "react";

export default function ApplicationWrapper({
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
