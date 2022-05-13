import React, { useState , useEffect } from "react";

export default function TableChecklistById(props) {

  const [todo_name, setTodo_Name] = useState("");
  const [task_name, setTask_Name] = useState("");
  const [is_completed, setIs_Completed] = useState("");
  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    fetch(BASE_URL+"/checklist/search/" + props.value)
      .then((res) => res.json())
      .then((result) => {
        setTodo_Name(result.data.todo_name);
        setTask_Name(result.data.task_name);
        setIs_Completed(result.data.is_completed);
      });
      
  }, [props.value]);

  return (
    <div className="containers">
      <header>
        <h1>Task Name : {task_name}</h1>
      </header>
      <table className="tabletask">
        <tbody>
        <tr>
              <th>Checklist ID</th>
              <th>Todo Name</th>
              <th>Task Name</th>
              <th>Is Complete</th>
            </tr>
              <tr>
                <td>{props.value}</td>
                <td>{todo_name}</td>
                <td>{task_name}</td>
                {is_completed === 1 && <td><strike>Success</strike></td>}
                {is_completed === 0 && <td>Fail</td>}
              </tr>
        </tbody>
      </table>
    </div>
  );
}
