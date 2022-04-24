import React from "react";

import ChecklistAPI from "../API/ChecklistAPI";

export default function Checklist() {

  const dataChecklist = ChecklistAPI();
  console.log(dataChecklist);

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
      <div className="task">
        <h1>Checklist</h1>
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
                <td>{checklist.task_id}</td>
                <td>{checklist.is_completed}</td>
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
