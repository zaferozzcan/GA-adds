import React, { useState } from "react";
import "../App.css";

export default function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addNote({ title, content });
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form className="create-area-form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          cols="30"
          rows="10"
          placeholder="Title.."
          value={title}
        />
        <textarea
          onChange={(e) => setContent(e.currentTarget.value)}
          name="content"
          cols="30"
          rows="10"
          placeholder="Your note.."
          value={content}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
