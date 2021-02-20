import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState("0");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return <div>{time}</div>;
}

export default Clock;
//
