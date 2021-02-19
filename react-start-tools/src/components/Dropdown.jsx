import React, { useState } from "react";
import "../App.css";
import DropDownItem from "../components/DropDownItem";

export default function Dropdown({ items, deleteItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dd-container">
      <div className="dd-top-bar">
        <h1 className="dd-title">Dropdown</h1>
        <h1 onClick={() => setOpen(!open)} className="toogle">
          {open ? "Close" : "Open"}
        </h1>
      </div>
      {open &&
        items.map((item, index) => {
          return (
            <DropDownItem
              deleteItem={deleteItem}
              key={index}
              id={index}
              item={item}
            />
          );
        })}
    </div>
  );
}
