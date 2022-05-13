import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryAPI from "../API/CategoryAPI";
import TableTaskById from "./TableTaskById";


export default function UpdateTask() {
  const dataCategory = CategoryAPI();
  const BASE_URL = "http://localhost:8080";
  const [taskName, setTaskName] = useState(null);
  const [categoryid, setCategory_Id] = useState(null);
  const [startdate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [note, setNote] = useState(null);
  const [status, setStatus] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(BASE_URL + "/tasklist/search/" + id)
      .then((res) => res.json())
      .then((result) => {
        setTaskName(result.data.task_name);
        setCategory_Id(result.data.category_id);
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
    fetch(BASE_URL+"/tasklist/update", {
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
      <div className="form">
      <form onSubmit={Submit}>
        <h1>Update TaskList {id}</h1>
        <hr />
        <div style={{margin: "0 20px"}}>
        <label>Task Name :</label>
        <input
          type="text"
          placeher="TaskName"
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
          value={startdate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>Due Date :</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <br />
        <label>Note :</label>
        <input
          type="text"
          placeher="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <label>Status :</label>
        <select
          className="selectCategory"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value={status} selected hidden>              
              {status === 1 && <td>Completed</td>}
              {status === 2 && <td>Doing</td>}
              {status === 3 && <td>Not Started</td>}
          </option>
          <option value="1">Complete</option>
          <option value="2">Doing</option>
          <option value="3">Not Started</option>
        </select>
        </div>
        <button className="submit" type="submit">Update</button>
      </form>
      </div>
      <TableTaskById value={id}/>
    </div>
  );
}


