import React, { useState, useRef } from "react";
import { IoBalloon } from "react-icons/io5";

function Balloon(props) {
  const size = 50;
  const ballonStyle = useRef({
    position: "absolute",
    top: Math.floor(Math.random() * (window.innerHeight - 100)),
    left: Math.floor(Math.random() * (window.innerWidth - 100)),
  });

  return (
    <div>
      <IoBalloon
        size={size}
        style={ballonStyle.current}
        onClick={props.handleBalloonClick}
      />
    </div>
  );
}

export default Balloon;
