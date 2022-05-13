import React, { useState , useEffect } from "react";

export default function TableTaskById(props) {

    const BASE_URL = "http://localhost:8080";
    const [taskName, setTaskName] = useState(null);
    const [iconUrl, setIconUrl] = useState(null);
    const [startdate, setStartDate] = useState(null);
    const [dueDate, setDueDate] = useState(null);
    const [note, setNote] = useState(null);
    const [status, setStatus] = useState(null);


  useEffect(() => {
    fetch(BASE_URL + "/tasklist/search/" + props.value)
      .then((res) => res.json())
      .then((result) => {
        setTaskName(result.data.task_name);
        setIconUrl(result.data.icon_url);
        setStartDate(result.data.start_date);
        setDueDate(result.data.due_date);
        setNote(result.data.note);
        setStatus(result.data.status);
      });
  }, [props.value]);

  return (
    <div className="containers">
      <header>
        <h1>Task Name : {taskName}</h1>
      </header>
      <table className="tabletask">
        <tbody>
          <tr>
            <th>Task ID</th>
            <th>Icon Category</th>
            <th>Start Date</th>
            <th>Due Date</th>
            <th>Note</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>{props.value}</td>
            <td>
              <img
                src={iconUrl}
                width="100px"
                height="100px"
                alt="icon"
              />
            </td>
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
  );
}
