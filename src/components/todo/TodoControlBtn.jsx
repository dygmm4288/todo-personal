import React from "react";
import "./TodoControlBtn.css";

export default function TodoControlBtn({ role, handleClickBtn, children }) {
  return (
    <button
      className={role + " control-btn button box"}
      type='button'
      onClick={handleClickBtn}>
      {children}
    </button>
  );
}
