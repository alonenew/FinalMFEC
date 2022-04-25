import React, { useState } from "react";
import TaskList from "../page/TaskList";
import CategoryAPI from "../API/CategoryAPI";

export default function CreateTask() {
  const dataCategory = CategoryAPI();

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
    fetch("http://localhost:8080/tasklist/create", {
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
        <h1>Create TaskList</h1>
        <hr />
        <label>Task Name :</label>
        <input
          type="text"
          id="task_name"
          placeholder="TaskName"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <label>Category ID : </label>
        <select
          className="selectCategory"
          onChange={(e) => setCategory_id(e.target.value)}
        >
          <option disabled selected>
              Select Category
            </option>
          {dataCategory.map((option) => (
            <option key={option.category_id} value={option.category_id}>
              {option.category_id} : {option.category_name}
            </option>
          ))}
        </select>
        <br />
        <label>Start Date :</label>
        <input
          type="date"
          id="start_date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>Due Date :</label>
        <input
          type="date"
          id="due_date"
          onChange={(e) => setDueDate(e.target.value)}
        />
        <br />
        <label>Note :</label>
        <input
          type="text"
          id="note"
          placeholder="Note"
          onChange={(e) => setNote(e.target.value)}
        />
        <label>Status :</label>
        <select
          className="selectCategory"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option disabled selected>Select Status</option>
          <option value={1}>Complete</option>
          <option value={2}>Doing</option>
          <option value={3}>Not Started</option>
        </select>
        <br />
        <button className="submit" type="submit">Add Task</button>
      </form>
      <TaskList />
    </div>
  );
}
