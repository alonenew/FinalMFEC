import { useEffect, useState } from "react";

export default function TaskAPI() {
  const [dataTask, setDataTask] = useState([]);

  const BASE_URL = "http://localhost:8080";
  
  useEffect(() => {
    fetch(BASE_URL+"/tasklist/all")
      .then((res) => res.json())
      .then((dataTask) => setDataTask(dataTask));
  }, []);

  return dataTask;
}
