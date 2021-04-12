import React, { useState, useEffect } from "react";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
const items = [
  { text: "Learn JavaScript", done: false },
  { text: "Learn React", done: false },
  { text: "Play around in JSFiddle", done: true },
  { text: "Build something awesome", done: true },
];

export default function App() {
  const [data, setData] = useState([""]);

  return (
    <div>
      <CreateArea />
      <Note />
    </div>
  );
}
