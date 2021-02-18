import React from "react";
import "./App.css";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
export default function App() {
  return (
    <div className>
      <CreateArea />
      <Note />
    </div>
  );
}
