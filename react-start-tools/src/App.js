import React, { useState, useEffect } from "react";
import ToDos from "./components/toDos";
const items = [
  { text: "Learn JavaScript", done: false },
  { text: "Learn React", done: false },
  { text: "Play around in JSFiddle", done: true },
  { text: "Build something awesome", done: true },
];

export default function App() {
  const [data, setData] = useState([]);
  function addItem(item) {
    console.log("item", item);
    setData([...data, item]);
  }
  function deleteItem(idx) {
    setData(data.filter((item) => data.indexOf(item) !== idx));
  }
  return (
    <div style={{ width: "50%", display: "inherit", margin: "20px auto" }}>
      <ToDos addItem={addItem} />
      <div>
        <ul>
          {data &&
            data.map((item, index) => (
              <div
                style={{ display: "flex", justifyContent: "center" }}
                key={index}
              >
                <li>{item}</li>
                <button
                  type="button"
                  style={{ color: "red" }}
                  onClick={() => deleteItem(index)}
                >
                  X
                </button>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
