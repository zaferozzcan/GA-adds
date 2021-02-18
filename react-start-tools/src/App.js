import React, { useState } from "react";
import "./App.css";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
export default function App() {
  const [data, setData] = useState([]);
  function addNote(newNote) {
    setData((pv) => {
      return [...pv, newNote];
    });
  }

  function onDelete(id) {
    setData(data.filter((item) => data.indexOf(item) !== id));
  }
  return (
    <div>
      <CreateArea addNote={addNote} />
      <div style={{ display: "flex" }}>
        {data.map((note, index) => {
          return (
            <Note id={index} onDelete={onDelete} key={index} data={note} />
          );
        })}
      </div>
    </div>
  );
}
