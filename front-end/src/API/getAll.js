import { useEffect, useState } from "react"

export default function API(){
    const [data, setData] = useState([]);
    const [err, setErr] = useState(false);
    
    useEffect(() => {
      fetch('http://localhost:8080/tasklist/all')
        .then(res => res.json())
        .then(data => setData(data))
        .catch((err) => setErr(err));
        console.log(err);
    }, []);

    return data;
}
