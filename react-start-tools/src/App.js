import React from "react";
import Dropdown from "./components/Dropdown";
const items = [
  { text: "Learn JavaScript", done: false },
  { text: "Learn React", done: false },
  { text: "Play around in JSFiddle", done: true },
  { text: "Build something awesome", done: true },
];

export default function App() {
  return (
    <div>
      <Dropdown items={items} />
    </div>
  );
}
