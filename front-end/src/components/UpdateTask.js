import React, { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateTask() {

  const [taskid, setTaskID] = useState();
  const [taskName, setTaskName] = useState();
  const [category_id, setCategory_id] = useState();
  const [startdate, setStartDate] = useState();
  const [dueDate, setDueDate] = useState();
  const [note, setNote] = useState();
  const [status, setStatus] = useState();
  

    const { id } = useParams();

    useEffect(() => {
    fetch("http://localhost:8080/tasklist/update/" + id, )
        .then(res => res.json())
        .then(
          (result) => {
            setTaskID(result.tasks.task_id)
            setTaskName(result.tasks.task_name)
            setCategory_id(result.tasks.category_id)
            setStartDate(result.tasks.start_date)
            setDueDate(result.tasks.due_date)
            setNote(result.tasks.note)
            setStatus(result.tasks.status)
          }
        )
    }, [id])
  
    const Submit = event => {
      event.preventDefault();
      var data = {

      }
      fetch('http://localhost:8080/tasklist/update', {
        method: 'PATCH',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(
        (result) => {
          if (result['description'] === 'SUCCESS') {
            window.location.href = '/';
          }
        }
      )
    }

  return (
    <div>
      <form onSubmit={Submit}>
        <h1>Update TaskList</h1>
        <label>Task ID :</label>
        <input
          disabled
          type="number"
          id="task_id"
          placeholder="Task_id"
          value={taskid}
          onChange={(e) => setTaskID(e.target.value)}
        />
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
    </div>
  );
}
