import React from "react";
import TaskAPI from "../API/TaskAPI";


export default function TaskList() {
  const dataTask = TaskAPI();
    console.log(dataTask);
  return (
    <div>
      <form>
        <h1>TaskList</h1>
        <label>Task Name :</label>
        <input type="text" id="task_name" placeholder="TaskName" />
        <label>Category ID :</label>
        <input type="number"  placeholder="Category ID" />
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
              <th>Catagory ID</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Note</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            {dataTask.map((tasks) => (
              <tr key={tasks.task_id}>
                <td>{tasks.task_id}</td>
                <td>{tasks.task_name}</td>
                <td>{tasks.catagory}</td>
                <td>{tasks.start_date}</td>
                <td>{tasks.due_date}</td>
                <td>{tasks.note}</td>
                <td>{tasks.status}</td>
                {/* <td><button onClick={() => taskUpdate(tasks.task_id)}>Edit</button></td>
                <td><button onClick={() => taskDelete(tasks.task_id)}>Delete</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

