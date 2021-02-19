import React, { useState } from "react";
import "../App.css";

export default function Dropdown({ items }) {
  const [open, setOpen] = useState(false);
  console.log("items", items);
  return (
    <div className="dd-container">
      <div className="dd-top-bar">
        <h1 className="dd-title">Dropdown</h1>
        <h1 onClick={() => setOpen(!open)} className="toogle">
          Open
        </h1>
      </div>
      {open &&
        items.map((item, index) => {
          return (
            <div
              className={`${item.done ? "dd-down-bar done" : "dd-down-bar"}`}
            >
              <h1 className="dd-title "> {item.text} </h1>
              <h1 className="toogle">
                <input type="checkbox" checked={item.done} />
              </h1>
            </div>
          );
        })}
    </div>
  );
}
