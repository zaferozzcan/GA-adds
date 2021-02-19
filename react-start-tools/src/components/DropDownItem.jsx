import React from "react";

export default function DropDownItem({ item, deleteItem, id }) {
  return (
    <div
      onClick={() => deleteItem(id)}
      className={`${item.done ? "dd-down-bar done" : "dd-down-bar"}`}
    >
      <h1 className="dd-title "> {item.text} </h1>
      <h1 className="toogle">
        <input type="checkbox" checked={item.done} />
      </h1>
    </div>
  );
}
