import React, { useState, useEffect } from "react";
import "../App.css";

export default function Coordinates() {
  const [XY, setXY] = useState("0,0");

  function mouseOverhandler(e) {
    let str = `${e.pageX} , ${e.pageY}`;
    setXY(str);
  }
  useEffect(() => {
    window.addEventListener("mouseover", mouseOverhandler);
  }, []);
  return <div>{XY}</div>;
}
