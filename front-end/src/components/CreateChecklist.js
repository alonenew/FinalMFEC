import React, { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateTask() {

  const BASE_URL = "http://localhost:8080";
  const [taskName, setTaskName] = useState("");
  const [todo_name, setTodo_Name] = useState("");
  const [is_completed, setIs_Completed] = useState("");
  const [dataChecklist, setDataChecklist] = useState([]);

  useEffect(() => {
    fetch(BASE_URL+'/checklist/searchtask/'+id)
      .then(res => res.json())
      .then(dataChecklist => setDataChecklist(dataChecklist))
  }, []);


  const { id } = useParams();

  useEffect(() => {
    fetch(BASE_URL+"/tasklist/search/"+id)
      .then((res) => res.json())
      .then((result) => {
        setTaskName(result.data.task_name);
      });
  }, [id]);

  const Submit = (event) => {
    event.preventDefault();
    let data = {
      task_id: id,
      todo_name: todo_name,
      is_completed: is_completed
    };
    fetch(BASE_URL+"/checklist/create", {
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
    if (window.confirm('Are you sure you want to delete Checklist ID '+todo_id)){
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
        .then((res) => res.json());
    }
  };





  return (
    <div>
      <form onSubmit={Submit}>
        <h1>Create Checklist</h1>
        <hr />
        <label>Task Name :</label>
        <input
          disabled
          defaultValue={taskName}
          type="text"
          placeholder="Task Name"
          onChange={(e) => setTodo_Name(e.target.value)}
        />
        <br />
        <label>Todo Name :</label>
        <input
          type="text"
          placeholder="Todo Name"
          onChange={(e) => setTodo_Name(e.target.value)}
        />
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
        <h1>Checklist : {taskName}</h1>
        <hr />
        <table className="tabletask">
          <tbody>
            <tr>
              <th>Checklist ID</th>
              <th>Todo Name</th>
              <th>Task Name</th>
              <th>Is Complete</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            {dataChecklist.map((checklist) => (
              <tr key={checklist.todo_id}>
                <td>{checklist.todo_id}</td>
                <td>{checklist.todo_name}</td>
                <td>{checklist.task_name}</td>
                {checklist.is_completed === 1 && <td className="success">Success</td>}
                {checklist.is_completed === 0 && <td>Fail</td>}
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
