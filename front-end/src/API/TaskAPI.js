import { useEffect, useState } from "react";

export default function TaskAPI() {
  const [dataTask, setDataTask] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/tasklist/all?sort_by=desc(status)")
      .then((res) => res.json())
      .then((dataTask) => setDataTask(dataTask));
  }, []);

  return dataTask;
}
