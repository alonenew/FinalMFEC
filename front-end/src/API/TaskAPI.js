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
    
    return dataTask;
}
