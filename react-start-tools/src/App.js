import "./App.css";
import Documentation from "./components/documentation";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Here is the lists of Components</h1>
      <Documentation start={11} />
    </div>
  );
}

export default App;
