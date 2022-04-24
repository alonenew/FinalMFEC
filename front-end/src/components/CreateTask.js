import React, { useState } from "react";
import TaskList from "./TaskList";

export default function CreateTask() {

  const [taskName, setTaskName] = useState();
  const [category_id, setCategory_id] = useState();
  const [startdate, setStartDate] = useState();
  const [dueDate, setDueDate] = useState();
  const [note, setNote] = useState();
  const [status, setStatus] = useState();

  const Submit = (event) => {
    event.preventDefault();
    let data = {
      task_name: taskName,
      category_id: category_id,
      start_date: startdate,
      due_date: dueDate,
      note: note,
      status: status,
    };
    fetch('http://localhost:8080/tasklist/create', {
      method: "POST",
      headers: {
        Accept:"application/json",
        'Content-Type':"application/json"
      },
      body: JSON.stringify(data),
    }).then((res) => res.json())
        .then(
            (result) => {
              if (result['description'] === 'SUCCESS') {
                window.location.href = '/';
              }
            }
          );
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <h1>Create TaskList</h1>
        <label>Task Name :</label>
        <input type="text" id="task_name" placeholder="TaskName" onChange={(e) => setTaskName(e.target.value)}/>
        <label>Category ID :</label>
        <input type="number" id="category_id" placeholder="Category ID" onChange={(e) => setCategory_id(e.target.value)}/>
        <br />
        <label>Start Date :</label>
        <input type="date" id="start_date" onChange={(e) => setStartDate(e.target.value)} />
        <label>Due Date :</label>
        <input type="date" id="due_date" onChange={(e) => setDueDate(e.target.value)}/>
        <br />
        <label>Note :</label>
        <input type="text" id="note" placeholder="Note" onChange={(e) => setNote(e.target.value)}/>
        <label>Status :</label>
        <input type="select" id="status" placeholder="Status" onChange={(e) => setStatus(e.target.value)}/>
        <br />
        <button type="submit">Add Task</button>
      </form>
      <TaskList />
    </div>
  );
}
