import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Checklist from "../page/Checklist";

export default function UpdateChecklist() {
  const [todo_name, setTodo_Name] = useState("");
  const [task_id, setTask_id] = useState("");
  const [is_completed, setIs_Completed] = useState("");

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
        <label>Todo Name :</label>
        <input type="text" placeholder="Todo Name" value={todo_name} onChange={(e) => setTodo_Name(e.target.value)} />
        <br />
        <label>Task ID :</label>
        <input type="number" placeholder="Task ID" value={task_id} onChange={(e) => setTask_id(e.target.value)}/>
        <br />
        <label>Is Complete :</label>
        <input type="number" placeholder="Between 1 or 2" min="1" max="2" value={is_completed} onChange={(e) => setIs_Completed(e.target.value)}/>
        <br />
        <button type="submit">Update</button>
      </form>
      <Checklist />
    </div>
  );
}
