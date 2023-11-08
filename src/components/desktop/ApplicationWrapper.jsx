import { useEffect, useRef } from "react";
import styled from "styled-components";
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
    <StyledApplicationWrapper ref={applicationWrapperRef}>
      <StyledApplicationHeader>
        <StyledCircle className='red' onClick={handleCloseApplication} />
        <StyledCircle
          className='orange'
          onClick={handleResizeApplication(applicationWrapperRef, REDUCE_SIZE)}
        />
        <StyledCircle
          className='green'
          onClick={handleResizeApplication(applicationWrapperRef, EXPAND_SIZE)}
        />
      </StyledApplicationHeader>
      {children}
    </StyledApplicationWrapper>
  );
}
const StyledApplicationWrapper = styled.div`
  width: 0;
  height: 0;
  box-sizing: border-box;
  box-shadow: 0px 10px 25px #555e;
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;
  transition: width 0.5s ease-in, height 0.6s ease-in-out;
  z-index: 99;
  overflow: hidden;
  &.active {
    backdrop-filter: blur(0.5rem);
    width: 80%;
    height: 80%;
  }
  &.full-size {
    width: 100%;
    height: 100%;
  }
`;

const StyledApplicationHeader = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  background-color: gray;
  gap: 8px;
  padding: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const StyledCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  &.red {
    background-color: red;
  }
  &.orange {
    background-color: orange;
  }
  &.green {
    background-color: green;
  }
  &.red:hover {
    background-color: lightcoral;
  }
  &.orang:hover {
    background-color: orangered;
  }
  &.gree:hover {
    background-color: lightgreen;
  }
`;
