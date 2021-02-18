import React from "react";

export default function Note({ data }) {
  console.log("data  props in note", data);
  return (
    <div className="note-container">
      <h3> {data.title}</h3>
      <hr />
      <p>{data.content}</p>
      <button>X</button>
    </div>
  );
}
