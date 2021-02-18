import React from "react";
import "../App.css";

export default function CreateArea() {
  return (
    <div>
      <form className="create-area-form">
        <input type="text" name="title" cols="30" rows="10" />
        <textarea name="context" id="context" cols="30" rows="10"></textarea>
        <button>Add</button>
      </form>
    </div>
  );
}
