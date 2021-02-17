import React from "react";

function Employee({ name, handleDelete, id }) {
  function deleteName(id) {
    handleDelete(id);
  }
  return (
    <div>
      <h1 onClick={() => deleteName(id)}>{name}</h1>
    </div>
  );
}

export default Employee;
