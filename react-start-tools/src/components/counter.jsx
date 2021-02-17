import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("We have run the useEffect hook!");
    return () => {
      console.log("I am unmountted");
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount(count - 1)} style={{ width: "60px" }}>
          -
        </button>
        <button onClick={() => setCount(count + 1)} style={{ width: "60px" }}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
