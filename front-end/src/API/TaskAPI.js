import { useEffect, useState } from "react"

export default function TaskAPI(){
    const [dataTask, setDataTask] = useState([]);
    const [err, setErr] = useState(false);
    
    useEffect(() => {
      fetch('http://localhost:8080/tasklist/all')
        .then(res => res.json())
        .then(dataTask => setDataTask(dataTask))
        .catch((err) => setErr(err));
        console.log(err);
    }, []);

    const taskUpdate = (task_id,task_name,category_id,start_date,due_date,note,status) => {
      let data = {
          "task_id": task_id,
          "task_name" : task_name,
          "category_id" : category_id,
          "start_date" : start_date,
          "due_date" : due_date,
          "note" : note,
          "status" : status
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
    }
  
    const teaskDelete = (task_id) => {
      let data = {
        'task_id': task_id
      }
      fetch('http://localhost:8080/tasklist/delete', {
        method: 'DELETE',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
    }
    
    return dataTask;
}