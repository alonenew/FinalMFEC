import React from "react";
import API from "../API/getAll";

export default function TaskList() {
  const data = API();

  return (
    <div>
      <form>
        <h1>TaskList</h1>
        <label>Task Name :</label>
        <input type="text" placeholder="TaskName" />
        <label>Category ID :</label>
        <input type="number" placeholder="Category ID" />
        <br />
        <label>Start Date :</label>
        <input type="date" />
        <label>Due Date :</label>
        <input type="date" />
        <br />
        <label>Note :</label>
        <input type="text" placeholder="Note" />
        <label>Status :</label>
        <input type="select" placeholder="Status" />
        <br />
        <button type="submit">Add Task</button>
      </form>
      <div className="task">
        <table  className="tabletask">
          <tbody>
            <tr>
              <th>Task ID</th>
              <th>Task Name</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Note</th>
              <th>Status</th>
            </tr>
            {data.map((tasks) => (
              <tr key={tasks.task_id}>
                <td>{tasks.task_id}</td>
                <td>{tasks.task_name}</td>
                <td>{tasks.start_date}</td>
                <td>{tasks.due_date}</td>
                <td>{tasks.note}</td>
                <td>{tasks.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

{
  /* {data.map((tasks) => (
          <ul key={tasks.task_id}>
            <li>
              {data.task_id} {tasks.task_name} {tasks.start_date}
              {tasks.due_date} {tasks.note} {tasks.status}
            </li>
          </ul>
        ))} */
}
