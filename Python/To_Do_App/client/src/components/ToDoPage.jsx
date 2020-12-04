import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function ToDoPage() {
  const [todo, setTodo] = useState();

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        return res.json;
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(todo);
  return (
    <div>
      <Card />
    </div>
  );
}
