import React, { useState } from "react";
import Checklist from "../page/Checklist";

export default function CreateChecklist() {

  const [todo_name, setTodo_name] = useState();
  const [task_id, setCategory_id] = useState();
  const [is_completed, setStartDate] = useState();

  const Submit = (event) => {
    event.preventDefault();
    let data = {
      todo_name: todo_name,
      task_id: task_id,
      is_completed: is_completed,
    };
    fetch("http://localhost:8080/checklist/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
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
        <h1>Create Checklist</h1>
        <label>Todo Name :</label>
        <input type="text" placeholder="Todo Name" onChange={(e) => setTodo_name(e.target.value)} />
        <br />
        <label>Task ID :</label>
        <input type="number" placeholder="Task ID" onChange={(e) => setCategory_id(e.target.value)}/>
        <br />
        <label>Is Complete :</label>
        <input type="number" placeholder="Is Complete" onChange={(e) => setStartDate(e.target.value)}/>
        <br />
        <button type="submit">Add Checklist</button>
      </form>
      <Checklist />
    </div>
  );
}
