import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryAPI from "../API/CategoryAPI";

export default function UpdateTask() {
  const dataCategory = CategoryAPI();

  const [taskName, setTaskName] = useState([]);
  const [categoryid, setCategory_Id] = useState([]);
  const [icon_Url, setIcon_Url] = useState([]);
  const [startdate, setStartDate] = useState([]);
  const [dueDate, setDueDate] = useState([]);
  const [note, setNote] = useState([]);
  const [status, setStatus] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/tasklist/search/" + id)
      .then((res) => res.json())
      .then((result) => {
        setTaskName(result.data.task_name);
        setCategory_Id(result.data.category_id);
        setIcon_Url(result.data.icon_url);
        setStartDate(result.data.start_date);
        setDueDate(result.data.due_date);
        setNote(result.data.note);
        setStatus(result.data.status);
      });
  }, [id]);

  const Submit = () => {
    var data = {
      task_id: id,
      task_name: taskName,
      category_id: categoryid,
      start_date: startdate,
      due_date: dueDate,
      note: note,
      status: status,
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
        <hr />
        <label>Task Name :</label>
        <input
          type="text"
          id="task_name"
          placeholder="TaskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <label>Category ID : </label>
        <select
          value={categoryid}
          className="selectCategory"
          onChange={(e) => setCategory_Id(e.target.value)}
        >
          {dataCategory.map((option) => (
            <option key={option.category_id} value={option.category_id}>
              {option.category_name}
            </option>
          ))}
        </select>
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
        <select
          defaultValue={status}
          className="selectCategory"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value={1}>Complete</option>
          <option value={2}>Doing</option>
          <option value={3}>Not Started</option>
        </select>
        <br />
        <button className="submit" type="submit">Update</button>
      </form>
      <div className="task">
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
          </tr>
            <tr>
              <td>{id}</td>
              <td>{taskName}</td>
              <td><img src={icon_Url} width="100px" height="100px" /></td>
              <td>{startdate}</td>
              <td>{dueDate}</td>
              <td>{note}</td>
              {status === 1 && <td>Completed</td>}
              {status === 2 && <td>Doing</td>}
              {status === 3 && <td>Not Started</td>}
            </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}
