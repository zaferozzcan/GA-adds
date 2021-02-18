import React, { useState } from "react";

export default function Coordinates() {
  const [XY, setXY] = useState("0,0");

  function mouseOverhandler(e) {
    let str = `${e.pageX} , ${e.pageY}`;
    setXY(str);
  }
  return <div onMouseOver={mouseOverhandler}>{XY}</div>;
}
