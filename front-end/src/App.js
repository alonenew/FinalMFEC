import { useEffect, useState } from "react";

import "./App.css";
import TaskList from "./components/TaskList";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/tasklist/all")
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      });
    console.log({ data });
  }, []);

  return (
    <div className="App">
      <TaskList />
    </div>
  );
}
