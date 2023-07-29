import React, { useState } from "react";
import "./Tooltip.css";

function Tooltip(props) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
      {showTooltip && (
        <div className={`tooltip tooltip-${props.position}`} >
          {props.content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
