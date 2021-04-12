import React, { useState, useEffect } from "react";
import toDos from "./components/toDos";
const items = [
  { text: "Learn JavaScript", done: false },
  { text: "Learn React", done: false },
  { text: "Play around in JSFiddle", done: true },
  { text: "Build something awesome", done: true },
];

export default function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <>
            <li>{item}</li>
            <button>X</button>
          </>
        ))}
      </ul>
    </div>
  );
}
