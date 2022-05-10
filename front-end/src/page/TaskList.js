import React from "react";
import Dialog from "../components/dialogDelete";

import TaskAPI from "../API/TaskAPI";

export default function TaskList() {
  const dataTask = TaskAPI();


  //const dataCategory = CategoryAPI();
  const createTask = () => {
    window.location = "/taskcreate"
  }

  const createChecklist = (task_id) => {
    window.location = "/checklistcreate"+task_id
  }

  const UpdateTask = (task_id) => {
    window.location = "/taskupdate" + task_id;
  };

  const DeleteTask = (task_id,task_name) => {
    if (window.confirm('Are you sure you want to delete Task ID '+task_name))  {
      let data = {
        task_id: task_id,
      };
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
    }
    
  };


  return (
    <div className="task">
      <header>
        <div></div>
        <h1>Task List</h1>
        <button className="bcreate" onClick={createTask}>Create</button>
      </header>

      <hr />
      <table className="tabletask">
        <tbody>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Icon Category</th>
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
              <td><img src={tasks.icon_url} width="100px" height="100px" /></td>
              <td>{tasks.start_date}</td>
              <td>{tasks.due_date}</td>
              <td>{tasks.note}</td>
              {tasks.status === 1 && <td>Completed</td>}
              {tasks.status === 2 && <td>Doing</td>}
              {tasks.status === 3 && <td>Not Started</td>}
              <td>
                <button
                  className="checklist"
                  onClick={() => createChecklist(tasks.task_id)}
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
                  onClick={() => DeleteTask(tasks.task_id,tasks.task_name)}
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
