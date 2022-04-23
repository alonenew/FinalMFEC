import React from "react";

import ChecklistAPI from "../API/ChecklistAPI";

export default function Checklist() {
  const dataChecklist = ChecklistAPI();
  return (
    <div>
      <form>
        <h1>Checklist</h1>
        <label>Todo Name :</label>
        <input type="text" placeholder="Category Name" />
        <br />
        <label>Task ID :</label>
        <input type="number" placeholder="Task ID" />
        <br />
        <label>Is Complete :</label>
        <input type="number" placeholder="Is Complete" />
        <br />
        <button type="submit">Add Checklist</button>
      </form>
      <div className="task">
        <table className="tabletask">
          <tbody>
            <tr>
              <th>Checklist ID</th>
              <th>Checklist Name</th>
              <th>Task ID</th>
              <th>Is Complete</th>

            </tr>
            {dataChecklist.map((checklist) => (
              <tr key={checklist.todo_id}>
                <td>{checklist.todo_id}</td>
                <td>{checklist.todo_name}</td>
                <td>{checklist.task_id}</td>
                <td>{checklist.is_completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
