import React from "react";
//import CategoryAPI from '../API/CategoryAPI';

import TaskAPI from "../API/TaskAPI";

export default function TaskList() {
  const dataTask = TaskAPI();

  //const dataCategory = CategoryAPI();
  const createTask = () => {
    window.location = "/taskcreate"
  }

  const UpdateTask = (task_id) => {
    window.location = "/taskupdate" + task_id;
  };

  const DeleteTask = (task_id) => {
    let data = {
      task_id: task_id,
    };
    console.log(JSON.stringify(data));
    fetch("http://localhost:8080/tasklist/delete", {
      method: "DELETE",
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
    <div className="task">
      <header>
        <div></div>
        <h1>Task List</h1>
        <button className="bcreate" onClick={createTask}>สร้าง</button>
      </header>

      <hr />
      <table className="tabletask">
        <tbody>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Catagory ID</th>
            <th>Start Date</th>
            <th>Due Date</th>
            <th>Note</th>
            <th>Status</th>
            <th>Checklist</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {dataTask.map((tasks) => (
            <tr key={tasks.task_id}>
              <td>{tasks.task_id}</td>
              <td>{tasks.task_name}</td>
              <td>{tasks.category_id}</td>
              <td>{tasks.start_date}</td>
              <td>{tasks.due_date}</td>
              <td>{tasks.note}</td>
              {tasks.status === 1 && <td>Completed</td>}
              {tasks.status === 2 && <td>Doing</td>}
              {tasks.status === 3 && <td>Not Started</td>}
              <td>
                <button
                  className="checklist"
                  onClick={() => UpdateTask(tasks.task_id)}
                >
                  Checklist
                </button>
              </td>
              <td>
                <button
                  className="update"
                  onClick={() => UpdateTask(tasks.task_id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="delete"
                  onClick={() => DeleteTask(tasks.task_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
