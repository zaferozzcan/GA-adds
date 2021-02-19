import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
const items = [
  { text: "Learn JavaScript", done: false },
  { text: "Learn React", done: false },
  { text: "Play around in JSFiddle", done: true },
  { text: "Build something awesome", done: true },
];

export default function App() {
  const [data, setData] = useState(items);
  function deleteItem(id) {
    setData(
      data.filter((item) => {
        return data.indexOf(item) !== id;
      })
    );
  }
  return (
    <div>
      <Dropdown deleteItem={deleteItem} items={data} />
    </div>
  );
}
