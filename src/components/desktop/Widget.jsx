import React from "react";
import styled from "styled-components";

export const SMALL_SIZE = "widget/small";
export const MID_SIZE = "widget/mid";
export const LARGE_SIZE = "widget/large";

export default function Widget({ type, children, widgetTitle }) {
  return (
    <StyledWidget type={type}>
      <h3>{widgetTitle}</h3>
      <StyledWidgetWrapper>{children}</StyledWidgetWrapper>
    </StyledWidget>
  );
}

function getHeightWithType({ type }) {
  switch (type) {
    case SMALL_SIZE:
      return "300px";
    case MID_SIZE:
      return "450px";
    case LARGE_SIZE:
      return "600px";
    default:
      return "300px";
  }
}

const StyledWidget = styled.div`
  width: 300px;
  height: ${getHeightWithType};
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
  margin: 0;
  list-style: none;
  align-items: stretch;
  padding: 0.3rem;
`;
