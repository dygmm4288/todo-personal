import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Jinho's Todo List</h1>
      <div className='header-right'>
        <span>from daejeon</span>
        <span>from nbc</span>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .header-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  span {
    font-style: italic;
  }
`;
