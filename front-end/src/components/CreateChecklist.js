import React, { useState } from "react";
import ChecklistAPI from "../API/ChecklistAPI";
import TaskAPI from "../API/TaskAPI";

export default function CreateChecklist() {

  const dataChecklist = ChecklistAPI();
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

  const UpdateChecklist = (todo_id) => {
    window.location = "/checklistUpdate" + todo_id;
  };

  const DeleteChecklist = (todo_id) => {
    let data = {
      todo_id: todo_id,
    };
    console.log(JSON.stringify(data));
    fetch("http://localhost:8080/checklist/delete", {
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
    <div>
      <form onSubmit={Submit}>
        <h1>Create Checklist</h1>
        <hr />
        <label>Todo Name :</label>
        <input
          type="text"
          placeholder="Todo Name"
          onChange={(e) => setTodo_name(e.target.value)}
        />
        <br />
        <label>Task Name :</label>
        <select
          className="selectCategory"
          onChange={(e) => setTask_id(e.target.value)}
        >
          <option disabled selected>
            Select Task
          </option>
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
          <option disabled selected>
            Select Is Completed
          </option>
          <option value="0">Fail</option>
          <option value="1">Success</option>
        </select>
        <br />
        <button className="submit" type="submit">
          Add Checklist
        </button>
      </form>
      <div className="task">
        <h1>Checklist</h1>
        <hr />
        <table className="tabletask">
          <tbody>
            <tr>
              <th>Checklist ID</th>
              <th>Todo Name</th>
              <th>Task ID</th>
              <th>Is Complete</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            {dataChecklist.map((checklist) => (
              <tr key={checklist.todo_id}>
                <td>{checklist.todo_id}</td>
                <td>{checklist.todo_name}</td>
                {/* {dataTask.map((tasks) => ( <td key={tasks.task_id}>{tasks.task_name}</td> ))} */}

                <td>{checklist.task_id}</td>
                <td>{checklist.is_completed === 1 ? "Success" : "Fail"}</td>
                <td>
                  <button
                    className="update"
                    onClick={() => UpdateChecklist(checklist.todo_id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="delete"
                    onClick={() => DeleteChecklist(checklist.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
