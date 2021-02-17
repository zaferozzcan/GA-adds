import "./App.css";
import { useState, useEffect } from "react";
import Counter from "./components/counter";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShowCounter(!showCounter);
        }}
      >
        {showCounter ? "Show Counter" : "Hide Counter"}
      </button>

      {showCounter && <Counter />}
    </div>
  );
}

export default App;
