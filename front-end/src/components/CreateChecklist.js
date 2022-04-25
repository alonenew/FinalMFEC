import React, { useState } from "react";
import TaskAPI from "../API/TaskAPI";
import Checklist from "../page/Checklist";

export default function CreateChecklist() {

  const dataTask = TaskAPI();

  const [todo_name, setTodo_name] = useState();
  const [task_id, setTask_id] = useState();
  const [is_completed, setIs_Completed] = useState();

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

  console.log(dataTask);
  return (
    <div>
      <form onSubmit={Submit}>
        <h1>Create Checklist</h1>
        <hr />
        <label>Todo Name :</label>
        <input type="text" placeholder="Todo Name" onChange={(e) => setTodo_name(e.target.value)} />
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
          <option value="0">Fail</option>
          <option value="1">Success</option>
        </select>
        <br />
        <button className="submit" type="submit">Add Checklist</button>
      </form>
      <Checklist />
    </div>
  );
}
