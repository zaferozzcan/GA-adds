import React, { useState } from "react";

function Documentation(props) {
  const [counter, setCounter] = useState(props.start);
  if (counter === 5) {
    setCounter(0);
  }
  return (
    <div>
      <h1 style={{ fontSize: "60px" }}> {counter}</h1>
      <div>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
          style={{ width: "30px" }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          style={{ width: "30px" }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Documentation;
