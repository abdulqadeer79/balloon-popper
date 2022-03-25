import React, { useState, useRef } from "react";
import { FaBomb } from "react-icons/fa";

function Mine(props) {
  const size = 50;
  const mineStyle = useRef({
    position: "absolute",
    top: Math.floor(Math.random() * (window.innerHeight - 100)),
    left: Math.floor(Math.random() * (window.innerWidth - 100)),
  });
  return (
    <div>
      <FaBomb
        size={size}
        style={mineStyle.current}
        onClick={props.handleMineClick}
      />
    </div>
  );
}

export default Mine;
