import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1>Jinho's Todo List</h1>
      <div className='header-right'>
        <span>from daejeon</span>
        <span>from nbc</span>
      </div>
    </header>
  );
}
