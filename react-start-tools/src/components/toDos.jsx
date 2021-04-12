import React, { useState } from "react";

export default function ToDos(props) {
  const [input, setInput] = useState("");
  function handleAdd(e) {
    e.preventDefault();
    props.addItem(input);
    setInput("");
  }

  return (
    <div style={{ width: "50px", margin: "100px auto" }}>
      <form style={{ display: "flex" }}>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="new to do item"
          value={input}
        ></input>
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}
