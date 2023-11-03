import React from "react";

export default function TodoControlBtn({ role, handleClickBtn, children }) {
  return (
    <button className={role} type='button' onClick={handleClickBtn}>
      {children}
    </button>
  );
}
