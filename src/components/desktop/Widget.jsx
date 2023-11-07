import React from "react";
import styled from "styled-components";

export default function Widget({ children, widgetTitle }) {
  return (
    <StyledWidget>
      <h3>{widgetTitle}</h3>
      <StyledWidgetWrapper>{children}</StyledWidgetWrapper>
    </StyledWidget>
  );
}

const StyledWidget = styled.div`
  width: 300px;
  height: 600px;
  overflow: auto;
  border: 1px solid black;
  border-radius: 0.5rem;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    width: 5px;
    height: 600px;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 2rem;

    background-color: rgba(0, 0, 0, 0.5);
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }

  * {
    text-align: center;
  }
  h3 {
    position: sticky;
    top: 0;
    width: 100%;
    min-height: 32px;
    backdrop-filter: blur(0.5rem);
    margin: 0;
    line-height: 32px;
    box-sizing: border-box;
  }
`;
const StyledWidgetWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  margin: 0;
  li {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
