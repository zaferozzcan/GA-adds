import "./App.css";
import { useState } from "react";
import Employee from "./components/employee";
const names = ["Zach", "Chris", "Json"];
function App() {
  const [employees, setEmployees] = useState(["Zafer", "Ecem", "Elif"]);

  function handleDelete(id) {
    setEmployees(employees.filter((item) => employees.indexOf(item) !== id));
  }
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Here is the lists of Employees</h1>
      {employees.map((item, index) => {
        return <Employee handleDelete={handleDelete} id={index} name={item} />;
      })}
    </div>
  );
}

export default App;
