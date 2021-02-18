import React, { useState, useEffect } from "react";
let timeStamp = new Date().toLocaleTimeString();
function Clock() {
  const [time, setTime] = useState();

  function timeChange() {
    setTime(timeStamp);
  }
  console.log(time);
  return <div></div>;
}

export default Clock;
