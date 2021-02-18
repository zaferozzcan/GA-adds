import React, { useState } from "react";
import "../App.css";

export default function Coordinates() {
  const [XY, setXY] = useState("0,0");

  function mouseOverhandler(e) {
    let str = `${e.pageX} , ${e.pageY}`;
    setXY(str);
  }
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      onMouseOver={mouseOverhandler}
    >
      {XY}
    </div>
  );
}
