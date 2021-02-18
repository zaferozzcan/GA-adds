import React from "react";

export default function Note({ data, onDelete, id }) {
  const inputStyle = {
    marginLeft: "10px",
  };
  function handleDelete(id) {
    onDelete(id);
  }
  return (
    <div className="note-container">
      <h3 style={inputStyle}> {data.title}</h3>
      <hr />
      <p style={inputStyle}>{data.content}</p>
      <button onClick={() => handleDelete(id)} type="button">
        X
      </button>
    </div>
  );
}
