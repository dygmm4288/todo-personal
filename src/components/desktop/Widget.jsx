import React from "react";
import "./Widget.css";

export default function Widget({ children, widgetTitle }) {
  return (
    <div className='widget'>
      <h3>{widgetTitle}</h3>
      <ul class='widget-wrapper'>{children}</ul>
    </div>
  );
}
