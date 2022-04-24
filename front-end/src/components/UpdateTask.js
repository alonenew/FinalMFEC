import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TaskList from "../page/TaskList";

export default function UpdateTask() {
  const [taskName, setTaskName] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [startdate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/tasklist/search/" + id)
      .then((res) => res.json())
      .then((result) => {
        setTaskName(result.data.task_name);
        setCategory_id(result.data.category_id);
        setStartDate(result.data.start_date);
        setDueDate(result.data.due_date);
        setNote(result.data.note);
        setStatus(result.data.status);
      });
      
  }, [id]);

  

  const Submit = () => {
    var data = {
      'task_id': id,
      'task_name': taskName,
      'category_id': category_id,
      'start_date': startdate,
      'due_date': dueDate,
      'note': note,
      'status': status,
    };
    fetch("http://localhost:8080/tasklist/update", {
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
        <h1>Update TaskList {id}</h1>
        <label>Task Name :</label>
        <input
          type="text"
          id="task_name"
          placeholder="TaskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <label>Category ID :</label>
        <input
          type="number"
          id="category_id"
          placeholder="Category ID"
          value={category_id}
          onChange={(e) => setCategory_id(e.target.value)}
        />
        <br />
        <label>Start Date :</label>
        <input
          type="date"
          id="start_date"
          value={startdate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>Due Date :</label>
        <input
          type="date"
          id="due_date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <br />
        <label>Note :</label>
        <input
          type="text"
          id="note"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <label>Status :</label>
        <input
          type="select"
          id="status"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <br />
        <button type="submit">Update Task</button>
      </form>
      <TaskList />
    </div>
  );
}
