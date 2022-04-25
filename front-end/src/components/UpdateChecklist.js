import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TaskAPI from "../API/TaskAPI";
import Checklist from "../page/Checklist";

export default function UpdateChecklist() {
  const [todo_name, setTodo_Name] = useState("");
  const [task_id, setTask_id] = useState("");
  const [is_completed, setIs_Completed] = useState("");

  const dataTask = TaskAPI();

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/checklist/search/" + id)
      .then((res) => res.json())
      .then((result) => {
        setTodo_Name(result.data.todo_name);
        setTask_id(result.data.task_id);
        setIs_Completed(result.data.is_completed);
      });
      
  }, [id]);

  

  const Submit = () => {
    var data = {
      'todo_id': id,
      'todo_name': todo_name,
      'task_id': task_id,
      'is_completed': is_completed,
    };
    fetch("http://localhost:8080/checklist/update", {
      method: "PATCH",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result["description"] === "SUCCESS") {
          window.location.href = "/";
        }
      });
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <h1>Update Checklist</h1>
        <hr />
        <label>Todo Name :</label>
        <input type="text" placeholder="Todo Name" value={todo_name} onChange={(e) => setTodo_Name(e.target.value)} />
        <br />
        <label>Task Name :</label>
        <select
          className="selectCategory"
          onChange={(e) => setTask_id(e.target.value)}
        >
                    <option disabled selected>Select Task</option>
          {dataTask.map((option) => (
            <option key={option.task_id} value={option.task_id}>
              {option.task_id} : {option.task_name}
            </option>
          ))}
        </select>
        <br />
        <label>Is Complete :</label>
        <select
          className="selectCategory"
          onChange={(e) => setIs_Completed(e.target.value)}
        >
                    <option disabled selected>Select Is Completed</option>
          <option value={0}>Fail</option>
          <option value={1}>Success</option>
        </select>
        <br />
        <button className="submit" type="submit">Update</button>
      </form>
      <Checklist />
    </div>
  );
}
