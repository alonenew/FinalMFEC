import { useEffect, useState } from "react";

export default function TaskAPI() {
  const [dataTask, setDataTask] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/tasklist/all"+"?$orderby=statusdesc")
      .then((res) => res.json())
      .then((dataTask) => setDataTask(dataTask));
  }, []);

  return dataTask;
}
